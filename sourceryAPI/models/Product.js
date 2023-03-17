const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        company:{type:String,  required: true},
        title: {type:String, required: true},
        variant:{type:String, required: false},
        image:{type:String, required: true, unique:true},
        sideBanners:{type:Array},
        categories:{type:Array, required: true},
        size:{type:Array},
        color:{type:Array},
        price:{type:Number, required: true},
        inStock:{type: Boolean, default:true},
        type:{type:String, required:true}
    }, {timestamps: true}
)

module.exports = mongoose.model("Product", ProductSchema);