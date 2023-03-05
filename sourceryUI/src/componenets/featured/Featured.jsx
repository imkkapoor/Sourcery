import React from "react";
import airmax from "./airmax-97-silver.jpg";
import nb from "./newbalance-2002R4.jpg";
import "./Featured.css";

export default function Featured() {
  return (
    <div className="container-featured-products">
      <img className="featured-poster" src={airmax} alt="ad-banner"/>
      <div className="featured-text" id="first-product">
        <h2>ULTIMATE STYLE</h2>
        <p>
        Metallic Siver reflective accents. Wavy overlays sit on top of mesh
        base. Sleek and futuristic design. Blends Comfort and Style. Signature
        Airmax cushioning. Get your pair now.
        <button>Shop Now</button>
        </p>
      </div>

      <img className="featured-poster" src={nb} alt="ad-banner" />
      <div className="featured-text" id="second-product">
        <h2>THE PERFECT BALANCE</h2>
        <p>
        Stylish and luxurious sneaker. Exceptional comfort and durability.
        ABZORB cushioning and Ndurance rubber outsoles. A colourway that
        everyone needs.
        <button>Shop Now</button>
        </p>
      </div>
    </div>
  );
}
