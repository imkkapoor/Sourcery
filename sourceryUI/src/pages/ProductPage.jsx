import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Announcement from "../componenets/announcement-top/Announcement";
import Footer from "../componenets/footer/Footer";
import NavigationBar from "../componenets/nav-bar/NavigationBar";
import Newsletter from "../componenets/news-letter/Newsletter";
import Product from "../componenets/shopping-page/Product";
import "./ProductPage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import TuneIcon from "@mui/icons-material/Tune";
import ShoppingPageBanner from "../componenets/shopping-page-banner/ShoppingPageBanner";
import CategoryBar from "../componenets/category-bar/CategoryBar";
import { useLocation } from "react-router-dom";

export default function ProductPage() {
   
    const location = useLocation();
    const query = location.pathname.split("/")[2];
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState("newest");
  
    const handleFilters = (e) => {
        const value = e.target.innerHTML;
    
        setFilter({
            ...filter,
            [e.target.name]: value.toLowerCase(),
        })

        console.log(filter);
    };

    return (
        <div>
            <Announcement />
            <NavigationBar />
            <CategoryBar />
            <ShoppingPageBanner />
            <div className="sort-filter-category-header">
                <div className="left">
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="collapse-text"
                        aria-expanded={open}
                    >
                        <TuneIcon />
                        Filters
                    </Button>
                </div>
                <div className="center">Results&#40;16&#41;</div>
                <div className="right">
                    <div className="sort-container">
                        <label>
                            <h6>Sort By*</h6>
                        </label>
                        <select onChange={(e) => setSort(e.target.value)}>
                            <option value="newest">Latest</option>
                            <option value="desc">Price High to Low</option>
                            <option value="asc">Price Low to High</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="filter-menu-and-products-container">
                <div className="filter-container">
                    <Collapse in={open} dimension="width">
                        <div id="collapse-text">
                            <Card
                                className="card"
                                body
                                
                            >
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header
                                            className="header"
                                            variant="outline-dark"
                                        >
                                            Colours
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>
                                                    <button
                                                        name="color"
                                                        onClick={handleFilters}
                                                        href="#/All"
                                                    >
                                                        All
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="color"
                                                        onClick={handleFilters}
                                                        href="#/Black"
                                                    >
                                                        Black
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="color"
                                                        onClick={handleFilters}
                                                        href="#/White"
                                                    >
                                                        White
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="color"
                                                        onClick={handleFilters}
                                                        href="#/Grey"
                                                    >
                                                        Gray
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="color"
                                                        onClick={handleFilters}
                                                        href="#/Red"
                                                    >
                                                        Red
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="color"
                                                        onClick={handleFilters}
                                                        href="#/Blue"
                                                    >
                                                        Blue
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="color"
                                                        onClick={handleFilters}
                                                        href="#/Silver"
                                                    >
                                                        Silver
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="color"
                                                        onClick={handleFilters}
                                                        href="#/Brown"
                                                    >
                                                        Brown
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="color"
                                                        onClick={handleFilters}
                                                        href="#/Cream"
                                                    >
                                                        Cream
                                                    </button>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="header">
                                            Sizes
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>
                                                    <button
                                                        name="size"
                                                        onClick={handleFilters}
                                                        href="#/5"
                                                    >
                                                        5
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="size"
                                                        onClick={handleFilters}
                                                        href="#/6"
                                                    >
                                                        6
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="size"
                                                        onClick={handleFilters}
                                                        href="#/7"
                                                    >
                                                        7
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="size"
                                                        onClick={handleFilters}
                                                        href="#/8"
                                                    >
                                                        8
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="size"
                                                        onClick={handleFilters}
                                                        href="#/9"
                                                    >
                                                        9
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="size"
                                                        onClick={handleFilters}
                                                        href="#/10"
                                                    >
                                                        10
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        name="size"
                                                        onClick={handleFilters}
                                                        href="#/11"
                                                    >
                                                        11
                                                    </button>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card>
                        </div>
                    </Collapse>
                </div>

                <Product
                    query={query}
                    filters={filter}
                    sort={sort}
                />
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
}
