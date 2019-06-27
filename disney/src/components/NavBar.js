import React from "react";
import { Link } from "react-router-dom";
// import Login from "./Login";
import "./main.css";
import DisneyParentLogo from "./DisneyParentLogo.png";
import { connect } from "react-redux";
// import { fetchPosts, fetchComments, postComment, deletePost } from "../actions";

class NavBar extends React.Component {
    state = {
        search: "",
        posts: this.props.posts
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    searchPost = search => {
        const newPosts = this.props.posts.filter( 
            post => post.title === this.state.search)
        this.setState({
            posts: newPosts
        })
    }

    render(){
        return(
            <div>
            <nav className="nav-bar">
                <div className="disney-logo">
                <Link to="/"><img src={DisneyParentLogo} alt="Logo"/></Link></div>

                <div className="nav-bar-right">
                    <div><Link to="/login">Login</Link></div>
                    <div><Link to="/register">Register</Link></div>
                    <div className="searchBar">
                        <form
                            onSubmit={this.searchPost}>
                        <input
                            placeholder="Search"
                            onChange={this.handleChange}
                            value={this.state.search}
                            name="search" /></form>
                </div>
                </div>
            </nav>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        ...state,
        posts: state.posts
    }
}

export default connect(mapStateToProps, { })(NavBar)