import React from "react";
// import Slider from "react-slick";
import BestSellerItem from "./BestSellerItem";
import "./BestSeller.css";
import axios from "axios"
import { useState, useEffect } from "react";

export default function BestSellers({cat, type, infoObject}) {


  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
        try {
            const res = await axios.get(
              `http://localhost:5000/api/products?type=${cat}`
                   
            );
            setProducts(res.data);
        } catch (err) {}
    };
    getProducts();
}, [cat]);
console.log(cat)
console.log(type)
console.log(Object.entries(type)[0][1])
useEffect(() => {
  cat &&
      setFilteredProducts(
          products.filter((item) =>
             Object.entries(type).every(([key,value]) =>
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
      <div className="best-seller-container">
        {filteredProducts.map((item) => (
          <BestSellerItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

