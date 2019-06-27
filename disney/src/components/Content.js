import React from "react"
import { connect } from "react-redux";
import { fetchPosts, postPost, fetchComments, updatePost } from "../actions";
import Castle from "./Castle.jpg";
import { Link } from "react-router-dom";
import axios from "axios";



class Content extends React.Component {
    state = {
        title: "",
        attraction: "",
        children: "",
        time: "",
        parent_id: 1,

    }

    componentDidMount(){
        this.props.fetchPosts()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    postPost = e => {
        e.preventDefault();
        this.props.postPost(this.state);
        this.setState({
            title: "",
            attraction: "",
            children: "",
            time: ""
        })
    }
    
    updatePost = (e, id) => {
        e.preventDefault();
        // console.log("UPDATING", this.state)
        const updatedPost = {
            title: this.state.title,
            attraction: this.state.attraction,
            children: this.state.children,
            time: this.state.time,
            parent_id: 1,
            id: id
        }
        this.props.updatePost(id, updatedPost);
    }

    render(){
        // console.log("TESTING PROPS", this.props.posts)
        if (this.props.posts.length === 0){
            return(
                <h1>Loading...</h1>
            )
        }
        return (
            <div className = "mainpage">
                <img src={Castle} alt="Disney Castle" />

                {this.props.posts.map(post => (
                        <div className ="post">
                            <Link to={`/posts/${post.id}`}>
                                <div>
                                    <h2>{post.title}</h2>
                                    <h4>@ {post.attraction}</h4>
                                    <h5>{post.time}</h5>
                                    <h5>{post.children} kids</h5>
                                    <button
                                        onClick = {e => this.updatePost(e, post.id)}>Update</button> 
                                </div>
                            </Link>
                        </div>


                ))}

            <div className="post-form">
                <input 
                    placeholder="Title" 
                    onChange={this.handleChange}
                    value={this.state.title}
                    name="title"/>

                <input
                    placeholder="Attraction"
                    onChange={this.handleChange}
                    value={this.state.attraction}
                    name="attraction" />
                <input
                    placeholder="# of children"
                    onChange={this.handleChange}
                    value={this.state.children}
                    name="children" />
                <input
                    placeholder="Time (ex. 10 a.m. PST)"
                    onChange={this.handleChange}
                    value={this.state.time}
                    name="time" />
                
                <button
                    onClick={this.postPost}>Post</button>
            </div>


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts, postPost, fetchComments, updatePost })(Content)