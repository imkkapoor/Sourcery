import React from "react";
import airmax from "./airmax-97-silver.jpg";
import nb from "./newbalance-2002R4.jpg";
import "./Featured.css";
import { Link } from "react-router-dom";

export default function Featured() {
    return (
        <div className="container-featured-products">
            <div id="first">
                <img
                    className="featured-poster"
                    id="banner-1"
                    src={airmax}
                    alt="ad-banner"
                />
                <div className="featured-text" id="first-product">
                    <h2>ULTIMATE STYLE</h2>
                    Metallic Siver reflective accents. Wavy overlays sit on top
                    of mesh base. Sleek and futuristic design. Blends Comfort
                    and Style. Signature Airmax cushioning. Get your pair now.
                    <button>
                        <Link
                            to="product/64141281247df5b4c3cd0962"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            Shop Now
                        </Link>
                    </button>
                </div>
            </div>
            <div id="second">
                <img
                    className="featured-poster"
                    id="banner-2"
                    src={nb}
                    alt="ad-banner"
                />
                <div className="featured-text" id="second-product">
                    <h2>THE PERFECT BALANCE</h2>
                    Stylish and luxurious sneaker. Exceptional comfort and
                    durability. ABZORB cushioning and Ndurance rubber outsoles.
                    A colourway that everyone needs.
                    <button>
                        <Link
                            to="product/64141230247df5b4c3cd0950"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            Shop Now
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
