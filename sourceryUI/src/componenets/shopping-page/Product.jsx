import React, { useEffect, useState } from "react";
import ProductEach from "./ProductEach";
import "./Product.css";
import axios from "axios";

export default function Product({ query, filters, sort }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                document.querySelector(".loading-container").style.display = "flex";
                document.querySelector(".filter-menu-and-products-container").style.display="none";
                const res = await axios.get(

                        `https://sourceryapi.onrender.com/api/products?${query}`

                );
                document.querySelector(".loading-container").style.display = "none"
                document.querySelector(".filter-menu-and-products-container").style.display="flex";
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [query]);

    useEffect(() => {
        query &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, query, filters]);

    useEffect(() => {
        if (sort === "best-seller") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <>
           
            <div className="product-container">
                {filteredProducts.map((item) => (
                    <ProductEach item={item} key={item._id} />
                ))}
            </div>
        </>
    );
}
