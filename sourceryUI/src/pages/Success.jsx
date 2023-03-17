import React from "react";
import { useLocation } from "react-router-dom";
import "./Success.css";
import { Link } from "react-router-dom";
export default function Success() {
    const location = useLocation();
    console.log(location);

    return (
        <div className="order-success-container">
            <div>Your payment was successfull!</div>
            <div> Thanks for shopping with us!</div>
            <Link
                style={{ textDecoration: "none" }}
                to="/"
                className="redirect-to-home"
            >
                <div>Go back to shopping</div>
            </Link>
        </div>
    );
}
