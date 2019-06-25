import React from "react";
// import { Link } from "react-router-dom";
// import Login from "./Login";
import "./main.css";
import DisneyParentLogo from "./DisneyParentLogo.png";

export default class NavBar extends React.Component {

    render(){
        return(
            <div>
            <nav className="nav-bar">
                <img src={DisneyParentLogo} alt="Logo"/>
                {/* <Login />
                <button><Link to="/register">Register</Link></button> */}
            </nav>
            </div>
        )

    }
}