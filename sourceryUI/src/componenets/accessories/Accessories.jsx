import React from "react";
import "./Accessories.css";
import { Link } from "react-router-dom";

export default function Accessories() {
    return (
        <div className="accessories-container">
            <img
                id="accessory-banner"
                src="https://drive.google.com/uc?export=view&id=10eJHmRMWn9mzbAvkqpfa2yhoOxVl1Pbk"
                alt="ad-banner"
            />
            <div className="text">
                <h2>RETRO FLAIR</h2>
                These classic shades will transport you back to the golden era
                of the 90s, where style was king and cool was everything. With
                their bold frames and tinted lenses, these sunglasses are sure
                to turn heads wherever you go.
                <button>
                    <Link
                        to="/products/type=accessories"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        SHOP ALL ACCESORIES
                    </Link>
                </button>
            </div>
        </div>
    );
}
