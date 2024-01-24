import React from "react";
import "./FrontView.css";

import { Link } from "react-router-dom";

export default function FrontView() {
    return (
        <div className="front-view">
            <div className="card-travis ">
                <div className="blank-space" />
                <img
                    id="slider"
                    src="https://www.dropbox.com/scl/fi/tj3fnrqug4qt8zfchilxt/cover-1.jpg?rlkey=zevtvt3qxyrblu00tgt9gymv4&raw=1"
                    alt="steal-deal-poster"
                />
                <div className="frontview-text">
                    <h2>STEAL OF THE MONTH</h2>
                    <h3>AJ1 RETRO HIGH 85 BLACK & WHITE</h3>
                    <p>
                        Nike is bringing back the original 1985 Air Jordan 1
                        silhouette. Leather uppers are constructed throughout,
                        while a black Nike Air logo sits on top of its white
                        tongue. Shop this essential colour story now.
                        <br></br>
                    </p>
                    <Link
                        to="product/64190118f537c9a2056d9652"
                        style={{ textDecoration: "none" }}
                    >
                        <button className="steal-shop-now">SHOP NOW</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
