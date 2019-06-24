import React from "react"
// import { connect } from "react-redux";
// import { loggingIn } from "../actions"




class Login extends React.Component {
    state = {

        username: "",
        password: "",

        
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
        })
    }
    render(){
        return (
            <div>
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
                
                <button
                    onClick={this.loggingIn}>Login</button>
                

            </div>
        )

    }
}


// const mapStateToProps = state => ({
//     loggingIn: state.loggingIn,
//     error: state.error
// })


// export default connect (
//     mapStateToProps,
//     { loggingIn }
// )(Login);
export default Login