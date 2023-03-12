import React, { useState } from "react";
import "./Register.css";
import Announcement from "../componenets/announcement-top/Announcement";
import Footer from "../componenets/footer/Footer";
import NavigationBar from "../componenets/nav-bar/NavigationBar";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(username, password, email);

    const handleRegister = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(
              "https://sourceryapi.onrender.com/api/auth/register", {
              username: username,
              email: email,
              password: password,
          });
          console.log(response.data);
          <Navigate to="/login"/>
      } catch (err) {
          console.log(err);
      }
  };

    return (
        <>
            <Announcement />
            <NavigationBar />
            <div className="register-user-container">
                <div className="register-user-container-wrapper">
                    <h1>
                        Looks like you’re new here.<br></br> We need some info.
                    </h1>
                    <form>
                        <input placeholder="First Name*"></input>
                        <input placeholder="Last Name*"></input>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username*"
                        ></input>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address*"
                        ></input>
                        <input type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create Password*"
                        ></input>

                        <p>
                            By clicking "Register", you agree to our
                            <b>Terms and Conditions</b> and
                            <b> Privacy Policy</b>.
                        </p>
                        <button onClick={handleRegister}>REGISTER</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
