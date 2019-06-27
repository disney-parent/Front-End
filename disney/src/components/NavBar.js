import React from "react";
import { Link } from "react-router-dom";
// import Login from "./Login";
import "./main.css";
import DisneyParentLogo from "./DisneyParentLogo.png";

export default class NavBar extends React.Component {

    render(){
        return(
            <div>
            <nav className="nav-bar">
                <div className="disney-logo">
                <Link to="/"><img src={DisneyParentLogo} alt="Logo"/></Link></div>
                <div className="searchBar">
                    <input
                        placeholder="Search"></input>
                </div>

                <div className="nav-bar-right">
                    <div><Link to="/login">Login</Link></div>
                    <div><Link to="/register">Register</Link></div>
                </div>
            </nav>
            </div>
        )

    }
}