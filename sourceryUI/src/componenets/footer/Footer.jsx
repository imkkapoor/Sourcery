import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="left">
                <h2>SOURCERY</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus quas iste, ipsa necessitatibus recusandae eos
                    soluta veniam
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
                    <li>
                        <Link
                            to="/"
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                                fontSize: "inherit",
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cart"
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                                fontSize: "inherit",
                            }}
                        >
                            Cart
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products/type=shoes"
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                                fontSize: "inherit",
                            }}
                        >
                            Sneakers
                        </Link>
                    </li>
                    <li>My Account</li>
                    <li>
                        <Link
                            to="/products/category=women"
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                                fontSize: "inherit",
                            }}
                        >
                            Women's
                        </Link>
                    </li>
                    <li>Order Tracking</li>
                    <li>
                        <Link
                            to="/products/type=apparel"
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                                fontSize: "inherit",
                            }}
                        >
                            Apparel
                        </Link>
                    </li>
                    <li>Whishlist</li>
                    <li>
                        <Link
                            to="/products/type=accessories"
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                                fontSize: "inherit",
                            }}
                        >
                            Accessories
                        </Link>
                    </li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <p>
                    <LocationOnIcon /> 2345 Blanshard St. , Victoria, British
                    Columbia V8N5K2
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
