import React from "react"
import { connect } from "react-redux";
import { fetchPosts, postPost, fetchComments } from "../actions";
import Castle from "./Castle.jpg";
import { Link } from "react-router-dom";



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
        this.props.fetchComments()
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

    render(){
        return (
            <div className = "mainpage">
                <img src={Castle} alt="Disney Castle" />

                {this.props.posts.map(post => (
                    <Link to={`/posts/${post.id}`}>
                        <div className ="post">
                            <h3>{post.title}</h3>
                            <h5>@ {post.attraction}</h5>
                            <h6>{post.time}</h6>
                            <h6>{post.children} kids</h6>
                        </div>
                    </Link>

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

export default connect(mapStateToProps, {fetchPosts, postPost, fetchComments})(Content)