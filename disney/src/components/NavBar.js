import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import DisneyParentLogo from "./DisneyParentLogo.png";

export default class NavBar extends React.Component {

    render(){
        return(
            <div>
            <nav>
                <img src={DisneyParentLogo} alt="Logo"/>
                {/* <Login />
                <button><Link to="/register">Register</Link></button> */}
            </nav>
            </div>
        )

    }
}