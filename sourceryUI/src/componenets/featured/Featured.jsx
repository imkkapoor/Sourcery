import React from "react";
import airmax from "./airmax-97-silver.jpg";
import nb from "./newbalance-2002R4.jpg";
import "./Featured.css";
import { Link } from "react-router-dom";


export default function Featured() {
  return (
    <div className="container-featured-products">
      <img className="featured-poster" id="banner-1" src={airmax} alt="ad-banner"/>
      <div className="featured-text" id="first-product">
        <h2>ULTIMATE STYLE</h2>
        <p>
        Metallic Siver reflective accents. Wavy overlays sit on top of mesh
        base. Sleek and futuristic design. Blends Comfort and Style. Signature
        Airmax cushioning. Get your pair now.
        
        </p>
        <Link to="product/640928f67f28f6bc4c4d922d" style={{ textDecoration: "none" }}>
        <button>Shop Now</button>
        </Link>
      </div>

      <img className="featured-poster" id="banner-2" src={nb} alt="ad-banner" />
      <div className="featured-text" id="second-product">
        <h2>THE PERFECT BALANCE</h2>
        <p>
        Stylish and luxurious sneaker. Exceptional comfort and durability.
        ABZORB cushioning and Ndurance rubber outsoles. A colourway that
        everyone needs.
        </p>
        <Link to="product/63fe98ae6d24855ac9b67e0a" style={{ textDecoration: "none" }}>
        <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}
