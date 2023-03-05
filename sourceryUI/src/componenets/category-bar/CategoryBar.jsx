import React from "react";
import "./CategoryBar.css";
import { categories } from "../../data/categories";
import CategoryBarEachItem from "./CategoryBarEachItem";

export default function CategoryBar() {
    return (
        <>
            <div className="category-bar-container">
                <ul>
                    {categories.map((item) => (
                        <CategoryBarEachItem item = {item} key={item.id}/>
                    ))}
                </ul>
            </div>
        </>
    );
}
