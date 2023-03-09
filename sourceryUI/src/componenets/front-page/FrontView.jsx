import React from "react";
import "./FrontView.css";
import Nike from "./blue_travis.jpg";
import { Link } from "react-router-dom";

export default function FrontView() {
  return (
    <div className="front-view">
      <div className="card-travis ">
        <img id="slider" src={Nike} alt="steal-deal-poster" />
        <div className="frontview-text">
          <h2>STEAL OF THE MONTH</h2>
          <h3>TRAVIS SCOTT X FRAGMENT X AJ1</h3>
          <p>Marked with an array of La Flame and Fragment design details. Tumbled
          white leather base accented by premium blue leather. Reversed black
          leather midfoot Swooshes. Cactus Jack and fragment design logos
          embossed on each heel. Shop this essential colour story now.
          <br></br></p>
          <Link to="product/6409296d7f28f6bc4c4d922f" style={{ textDecoration: "none" }}>
          <button className="steal-shop-now">SHOP NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
