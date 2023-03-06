const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_AES_SEC
        ).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.log(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
        });
        if (!user) {
            return res.status(401).json("Wrong credentials");
        }
        const hashPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_AES_SEC
        );

        const Orignalpassword = hashPassword.toString(CryptoJS.enc.Utf8);
        if (Orignalpassword !== req.body.password) {
            return res.status(401).json("Wrong credentials");
        }

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC,
        {expiresIn:"3d"});

        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
