import React,{ Component } from 'react';
import "jquery/dist/jquery.min";
import { NavLink } from "react-router-dom";
import $ from 'jquery';

export default class Nav extends Component{
    // jQuerycode=() => {
    //     $(function(){
    //         $('#navbarMenu ul li a').on("click",function(){
    //             $('#navbarMenu ul').find('li.active').removeClass('active');
    //             $(this).parent().addClass('active');
        
    //             return false; 
    //         });
    //     });
    //       }

    //       componentDidMount(){
    //         this.jQuerycode()
    //       }

    render(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark" >
        <a href="/" className="navbar-brand logo"> Srm Hub </a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item px-3">
                <NavLink end="active-link" to="/" className="nav-link"> Home</NavLink>
            </li>
            <li className="nav-item px-3">
                <NavLink end="active-link" to="/notes" className="nav-link"> Notes </NavLink>
            </li>
            <li className="nav-item px-3">
                <NavLink end="active-link" to="/restaurants" className="nav-link"> Restaurants </NavLink>
            </li>
            <li className="nav-item px-3">
                <NavLink end="active-link" to="/contact" className="nav-link"> Contact Us </NavLink>
            </li>
        </ul>
        </div>
        </nav>
      )
     } 
    }