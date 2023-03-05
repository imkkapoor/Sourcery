import React, { useEffect, useState } from "react";
import ProductEach from "./ProductEach";
import "./Product.css";
import axios from "axios";

export default function Product({cat, filters, sort }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?category=${cat}`
                        : "http://localhost:5000/api/products"
                );
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [cat]);


    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);

    useEffect(() => {
        if ((sort === "best-seller")) {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        }else if((sort === "asc")) {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        }else{
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    },[sort]);




    return (
        <>
            <div className=""></div>
            <div className="product-container">
                {filteredProducts.map((item) => (
                    <ProductEach item={item} key={item.id} />
                ))}
            </div>
        </>
    );
}
