import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./ProductEach.css";
import { Link } from "react-router-dom";

export default function ProductEach({ item }) {
    return (
        <div className="product-each-container">
            <div id="Favorite-Border-Icon">
                <FavoriteBorderIcon />
            </div>
            <Link
                to={`/product/${item._id}`}
                style={{ textDecoration: "none" }}
            >
                <img src={item.image} alt ="product-banner" />
                <div className="all-the-info">
                    <h5>{item.company}</h5>
                    <p>{item.title}</p>
                    <p className="variant">{item.variant}</p>
                    <p className="price">${item.price}</p>
                </div>
            </Link>
        </div>
    );
}
