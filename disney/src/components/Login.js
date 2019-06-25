import React from "react";
import "./main.css";
import { connect } from "react-redux";
import { loggingIn } from "../actions"




class Login extends React.Component {
    state = {

        username: "",
        password: "",
        accountType: ""

        
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    loggingIn = e => {
        e.preventDefault();
        this.props.loggingIn(this.state);
        this.setState({
            username: "",
            password: "",
            accountType: ""
        })
    }
    render(){
        return (
            <div className="input-form">
                <input 
                    placeholder="Username" 
                    onChange={this.handleChange}
                    value={this.state.username}
                    name="username"/>
                <input
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    name="password" />
                <input
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    name="email" />
                <input
                    placeholder="Account type"
                    onChange={this.handleChange}
                    value={this.state.accountType}
                    name="accountType" />
                
                <button
                    onClick={this.loggingIn}>Login</button>
                

            </div>
        )


    }
}



function mapStateToProps(state){
    return {} 
};



export default connect (mapStateToProps, { loggingIn })(Login)