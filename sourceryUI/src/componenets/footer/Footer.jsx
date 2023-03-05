import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="left">
        <h2>SOURCERY</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quas iste, ipsa necessitatibus recusandae eos soluta veniam
        </p>
        <div className="social-container">
          <div className="icons" id="fb">
            <FacebookIcon />
          </div>
          <div className="icons" id="ig">
            <InstagramIcon />
          </div>
          <div className="icons" id="tweet">
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className="center">
        <h2>Useful Links</h2>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Sneakers</li>
          <li>My Account</li>
          <li>Women's Apparel</li>
          <li>Order Tracking</li>
          <li>Men's Apparel</li>
          <li>Whishlist</li>
          <li>Accessories</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <p>
          <LocationOnIcon /> 2345 Blanshard St. , Victoria, British Columbia
          V8N5K2
        </p>
        <p>
          <CallIcon /> +1 234 567 890
        </p>
        <p>
          <EmailIcon /> sourcery604@gmail.com
        </p>
      </div>
    </div>
  );
}
