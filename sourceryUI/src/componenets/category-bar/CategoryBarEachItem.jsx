import React from "react";
import { Link } from "react-router-dom";

export default function CategoryBarEachItem({ item }) {
    return (
        <div>
            <Link to={`/products/${item.query}`}>
                <li>
                    <button>{item.title}</button>
                </li>
            </Link>
        </div>
    );
}
