import React, { useEffect, useState } from "react";
import Announcement from "../componenets/announcement-top/Announcement";
import Footer from "../componenets/footer/Footer";
import NavigationBar from "../componenets/nav-bar/NavigationBar";
import TrustStatement from "../componenets/trust-statement/TrustStatement";
import "./ProductSingleDisplay.css";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

export default function ProductSingleDisplay() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [size, setSize] = useState(null);
    const dispacth = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch {}
        };
        getProduct();
    }, [id]);

    const quantity = 1;

    return (
        <>
            <Announcement />
            <NavigationBar />
            <div className="single-product-container">
                <Carousel fade interval={null} variant="dark">
                    <Carousel.Item>
                        <div className="left">
                            <img src={product.image} alt="product-banner" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="left">
                            <img src="https://drive.google.com/uc?export=view&id=17fqqrAM6xcwShEXwxfB2--c_XEJCNNRr" alt="product-banner" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="left">
                            <img src="https://drive.google.com/uc?export=view&id=1ZlJAShNlEQh6To6iOjd3NCNZe3xA320a" alt="product-banner" />
                        </div>
                    </Carousel.Item>

                </Carousel>
                <div className="right">
                    <h4>{product.company}</h4>
                    <h1>{product.title}</h1>
                    <h2>{product.variant}</h2>
                    <h2 id="price">${product.price}</h2>
                    <div className="size-select">
                        US Men's sizes displayed<br></br>
                        <div className="size-button-container">
                            {product.size?.map((s) => (
                                <button
                                    name="size"
                                    key={s}
                                    onClick={() => setSize(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        <button
                            id="add"
                            onClick={() => {
                                dispacth(
                                    addProduct({ ...product, quantity, size })
                                );
                            }}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
            <TrustStatement />
            <Footer />
        </>
    );
}
