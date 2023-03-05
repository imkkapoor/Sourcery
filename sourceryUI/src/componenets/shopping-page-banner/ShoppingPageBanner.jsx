import React from "react";
import "./ShoppingPageBanner.css"
export default function ShoppingPageBanner() {
    return (
        <>
            <div className="shopping-page-banner-container">
                <img src={require("../../data/AJ1-poster.jpg")} alt = "ad-banner" />
                <div className="info">
                    <h6>JORDAN</h6>
                    <h3>THE BEST OF AIR JORDAN 1's</h3>
                    <p>
                        Endlessly versatile. Clean and simple. The classic of
                        all time. A ton of colour ways to suit your style.
                    </p>
                </div>
            </div>
        </>
    );
}
