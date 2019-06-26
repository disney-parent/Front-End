import React from "react"
import "./main.css";
import { connect } from "react-redux";
import { register } from "../actions"


class Register extends React.Component {
    state = {

        username: "",
        password: "",
        email: "",
        accountType: ""

        
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    register = e => {
        e.preventDefault();
        this.props.register(this.state);
        this.setState({
            username: "",
            password: "",
            email: "",
            accountType: ''
        })
        this.props.history.push('/login');
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
                    onClick={this.register}>Register</button>
                

            </div>
        )

    }
}

function mapStateToProps(state){
    return {} 
};



export default connect (mapStateToProps, { register })(Register)