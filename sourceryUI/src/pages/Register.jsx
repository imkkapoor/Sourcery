import React from "react";
import "./Register.css";
import Announcement from "../componenets/announcement-top/Announcement";
import Footer from "../componenets/footer/Footer";
import NavigationBar from "../componenets/nav-bar/NavigationBar";

export default function Register() {
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
            <input placeholder="Username*"></input>
            <input placeholder="Email Address*"></input>
            <input placeholder="Create Password*"></input>
            <input placeholder="Confirm Password*"></input>
            <p>
              By clicking "Register", you agree to our <b>Terms and Conditions</b> and
              <b> Privacy Policy</b>.
            </p>
            <button>REGISTER</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
