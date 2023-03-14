import React from "react";
// import Slider from "react-slick";
import BestSellerItem from "./BestSellerItem";
import "./BestSeller.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function BestSellers({ cat, type, infoObject }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                var elements = document.getElementsByClassName(
                    "loading-container-best-sellers"
                );
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.display = "flex";
                }

                const res = await axios.get(
                    `https://sourceryapi.onrender.com/api/products?type=${cat}`
                );
                for (var j = 0; j < elements.length; j++) {
                    elements[j].style.display = "none";
                }

                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(type).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, type]);

    return (
        <>
            <div className="best-seller-head-container">
                <p>{infoObject.header}</p>
                <h6>{infoObject.link}</h6>
            </div>
            <div className="loading-container-best-sellers" style={{display: "flex"}}>
                <div className="loading-best-sellers"></div>
      </div>
            <div className="best-seller-container">
                {filteredProducts.map((item) => (
                    <BestSellerItem item={item} key={item._id} />
                ))}
            </div>
        </>
    );
}
