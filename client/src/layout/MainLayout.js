import React from 'react';
import { NavLink, Outlet } from "react-router-dom"; 
import "../App.css";

export default function MainLayout() {
    return (
            <>
            <div className="container">
                <nav className="navbar">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <NavLink to="/article" className="nav-link">
                            บทความ
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/psychologist" className="nav-link">
                            แนะนำนักจิตวิทยา
                            </NavLink>
                        </li>
                    </ul>
                    <div className="line"></div>
                    <button className="login">
                        <a className="actlogin">
                        Login
                        </a>
                    </button>
                    <button className="signup">
                        <a className="actsignup" href="#">
                        Sign Up
                        </a>
                    </button>
                    {/* <NavLink to="/">Home</NavLink>&nbsp; */}
                    {/* <NavLink to="/products">Product</NavLink>&nbsp;
                    <NavLink to="/about">About us</NavLink>&nbsp; */}
                </nav>
                <div className="container">
                    <Outlet />{/* your content will be shown in the Outlet */}
                </div>
            </div>
            </>
        );
}
