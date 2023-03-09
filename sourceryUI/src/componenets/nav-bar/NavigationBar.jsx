import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./NavBar.css";
import searchIcon from "./icons8-search-50.png";
import {
    FavoriteBorder,
    PersonOutlineOutlined,
    ShoppingBagOutlined,
} from "@mui/icons-material";

import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/apiCalls";

export default function NavigationBar() {
    const quantityOfCart = useSelector((state) => state.cart.quantity);
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    function logoutButtonVisisbility() {
        document.querySelector("#logout-account").style.display === "none"
            ? (document.querySelector("#logout-account").style.display =
                  "block")
            : (document.querySelector("#logout-account").style.display =
                  "none");
    }
    function logoutButtonVisisbilityMobile() {
        document.querySelector("#logout-mobile-account").style.display === "none"
            ? (document.querySelector("#logout-mobile-account").style.display =
                  "block")
            : (document.querySelector("#logout-mobile-account").style.display =
                  "none");
    }

    return (
        <div>
            <Navbar sticky="top" className="navbar-custom" variant="dark">
                <Container>
                    <Nav className="me-auto-left">
                        <Navbar.Text id="language">EN</Navbar.Text>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="searchBar"
                                aria-label="Search"
                            />
                            <Button className="searchButton" variant="light">
                                <img alt="" src={searchIcon} />
                            </Button>
                            <Link
                                to="/login"
                                id="login-mobile-account"
                                onClick={(e) => {
                                    e.preventDefault();
                                    user
                                        ? logoutButtonVisisbilityMobile()
                                        : navigate("/login");
                                }}
                            >
                                <PersonOutlineOutlined />
                            </Link>
                            <Link
                            to="/login"
                            className="right-contents"
                            id="logout-mobile-account"
                            onClick={(e) => {
                                e.preventDefault();
                                const alertLogoutStateMobile = async () => {
                                    await logout(dispatch);
                                    document.querySelector(
                                        "#logout-mobile-account"
                                    ).style.display = "none";
                                };
                                alertLogoutStateMobile();
                            }}
                        >
                            Logout
                        </Link>
                        </Form>
                    </Nav>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Navbar.Text className="center">SOURCERY</Navbar.Text>
                    </Link>

                    <Nav className="right">
                        <Nav.Link
                            className="right-contents"
                            href="#sell-with-us"
                        >
                            SELL
                        </Nav.Link>
                        <Nav.Link
                            className="right-contents"
                            href="#authenticity"
                        >
                            AUTHENTICITY
                        </Nav.Link>
                        <Nav.Link className="right-contents">
                            <p>|</p>
                        </Nav.Link>

                        <Link
                            to="/login"
                            className="right-contents"
                            id="login-account"
                            onClick={(e) => {
                                e.preventDefault();
                                user
                                    ? logoutButtonVisisbility()
                                    : navigate("/login");
                            }}
                        >
                            <PersonOutlineOutlined />
                        </Link>
                        <Link
                            to="/login"
                            className="right-contents"
                            id="logout-account"
                            onClick={(e) => {
                                e.preventDefault();
                                const alertLogoutState = async () => {
                                    await logout(dispatch);
                                    document.querySelector(
                                        "#logout-account"
                                    ).style.display = "none";
                                };
                                alertLogoutState();
                            }}
                        >
                            Logout
                        </Link>
                        <Nav.Link className="right-contents" href="#favourites">
                            <FavoriteBorder />
                        </Nav.Link>
                        <Link to="/cart" id="shopping-bag">
                            <Badge
                                badgeContent={quantityOfCart}
                                color="primary"
                            >
                                <ShoppingBagOutlined />
                            </Badge>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
