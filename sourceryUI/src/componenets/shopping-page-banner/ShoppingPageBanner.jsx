import React from "react";
import "./ShoppingPageBanner.css";

export default function ShoppingPageBanner({infoObject}) {
    return (
        <>
            <div className="shopping-page-banner-container">
                <img src={infoObject.imageSrc} loading="lazy" alt = "ad-banner" />
                
                <div className="info">
                    <h6>{infoObject.brand}</h6>
                    <h3>{infoObject.line}</h3>
                    <p>
                        {infoObject.text}
                    </p>
                </div>
            </div>
        </>
    );
}
