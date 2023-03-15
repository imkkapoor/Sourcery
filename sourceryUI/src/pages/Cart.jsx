import React, { useEffect, useState } from "react";
import "./Cart.css";
import Announcement from "../componenets/announcement-top/Announcement";
import Footer from "../componenets/footer/Footer";
import NavigationBar from "../componenets/nav-bar/NavigationBar";
import BestSellers from "../componenets/best-sellers/BestSellers";
import TrustStatement from "../componenets/trust-statement/TrustStatement";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {userRequest} from "../requestMethods";
import { Link, useNavigate } from "react-router-dom";
import { removeProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    const dispacth = useDispatch();
   
    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total !== 0 ? (cart.total + 25) * 100 : 0,
                });
              
                const response = await axios.post(
                    "https://sourceryapi.onrender.com/api/orders/",
                    {
                        userId: user.currentUser._id,
                        products: cart.products,
                        amount: cart.total !== 0 ? (cart.total + 25) * 100 : 0,
                        address: res.data.billing_details.address,
                    },{headers: {"token" : `Bearer ${user.currentUser.accessToken}`}}
                );

                console.log(response);

                navigate("/success", {
                    stripeData: res.data,
                    products: cart,
                });
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart, navigate, user]);
    // console.log(stripeToken);

    return (
        <>
            <Announcement />
            <NavigationBar />

            <div className="cart-container-head">
                Shopping Cart &#40;{cart.quantity}&#41;
            </div>
            <div className="cart-container-rest">
                <div className="left">
                    {cart.products.map((product, index) => (
                        <Link style = {{textDecoration:"none"}}to={`/product/${product._id}`}>
                        <div className="product-card" key={index}>
                            <img src={product.image} alt="product"></img>
                            <div className="info">
                                <div className="left">
                                    <h5>{product.company}</h5>
                                    <h3>{product.title}</h3>
                                    <p id="variant">{product.variant}</p>
                                    <p className="price-view">
                                        ${product.price}
                                    </p>
                                    <p id="size">Size: {product.size}</p>
                                    <button
                                        onClick={() => {
                                            dispacth(removeProduct(product));
                                        }}
                                        id="remove-product"
                                    >
                                        <ClearIcon
                                            style={{
                                                fill: "black",
                                                textAlign: "center",
                                                alignContent: "center",
                                                fontSize: "medium",
                                            }}
                                        />{" "}
                                        Remove
                                    </button>
                                </div>
                                <div className="right">
                                    <p className="price-view">
                                        ${product.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>

                <div className="right">
                    <h3>ORDER SUMMARY</h3>
                    <div className="summary">
                        <div className="left">
                            Subtotal: <br></br>
                            Shipping:<br></br>
                            <b>TOTAL</b>
                        </div>
                        <div className="right">
                            {cart.total} <br></br>
                            {cart.total === 0 ? 0 : 25}
                            <br></br>
                            <b>{cart.total === 0 ? 0 : cart.total + 25}</b>
                        </div>
                    </div>
                    <StripeCheckout
                        name="Sourcery"
                        image={require("../data/AJ1-poster.jpg")}
                        billingAddress
                        shippingAddress
                        shipping_address_collection
                        description={`Your total is $${
                            cart.total === 0 ? 0 : cart.total + 25
                        }`}
                        amount={(cart.total === 0 ? 0 : cart.total + 25) * 100}
                        token={onToken}
                        stripeKey="pk_test_51MgEOvIdSSK5WZdJ1GSOksBm4T0KjwTY6oadzpMRT0OWTrx3PsBEYcpx8qMXQ602KHTAvrCZ0bq1E7fUENhKvrB2005KINEsIs"
                    >
                        <button>CHECKOUT</button>
                    </StripeCheckout>
                    <img
                        src={require("./payment-methods.png")}
                        alt="paymets supported"
                    ></img>
                </div>
            </div>
            <TrustStatement />
            <BestSellers
                cat="shoes"
                type={{ categories: "best-seller" }}
                infoObject={{
                    header: "You may also like",
                    link: "",
                }}
            />
            <Footer />
        </>
    );
}
