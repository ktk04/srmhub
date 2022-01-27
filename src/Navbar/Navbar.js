import React from 'react';
import "jquery/dist/jquery.min";
import { NavLink } from "react-router-dom";
const Nav = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark" >
        <a href="/" className="navbar-brand"> <img src={require("./Logo.jpg")} height="70px" width="200px"/> </a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a href="/" className="nav-link"> Home</a>
            </li>
            <li className="nav-item">
                <a href="/notes" className="nav-link"> Notes </a>
            </li>
            <li className="nav-item">
                <a href="/restaurants" className="nav-link"> Restaurants </a>
            </li>
            <li className="nav-item">
                <a href="#Contact" className="nav-link"> Contact Us </a>
            </li>
        </ul>
        </div>
        </nav>
    )
    }

    export default Nav;