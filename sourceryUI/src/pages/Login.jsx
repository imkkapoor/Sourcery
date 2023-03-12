import React, { useState } from "react";
import "./Login.css";
import Announcement from "../componenets/announcement-top/Announcement";
import Footer from "../componenets/footer/Footer";
import NavigationBar from "../componenets/nav-bar/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Link } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    return (
        <>
            <Announcement />
            <NavigationBar />
            <div className="login-user-container">
                <div className="login-user-container-wrapper">
                    <h1>Welcome to Sourcery.</h1>
                    <form>
                        <input
                            placeholder="Enter Username*"
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                        <input
                            placeholder="Enter Password*"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                login(dispatch, { username, password });
                            }}
                            disabled={isFetching}
                        >
                            LOGIN
                        </button>
                        {error && (
                            <p style={{ color: "red", fontWeight: "bold" }}>
                                Wrong credentials!
                            </p>
                        )}
                        <p>Forgot Password? | <Link to="/register" style={{textDecoration:"none"}} id="toRegister">Create an Account</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
