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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavigationBar() {
    const quantityOfCart = useSelector((state) => state.cart.quantity);

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
                        </Form>
                    </Nav>
                    <Navbar.Text className="center">SOURCERY</Navbar.Text>

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

                        <Link to="/login" className="right-contents" id="login-account">
                            <PersonOutlineOutlined />
                        </Link>
                        <Nav.Link className="right-contents" href="#favourites">
                            <FavoriteBorder />
                        </Nav.Link>
                        <Link
                            to="/cart"
                            
                            id="shopping-bag"
                        >
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
