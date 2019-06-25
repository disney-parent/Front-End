import React from "react"
import { connect } from "react-redux";
import { fetchPosts, postPost } from "../actions"



class Content extends React.Component {
    state = {
        title: "",
        attraction: "",
        children: "",
        time: "",
        // parent_id: 1,

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

    render(){
        return (
            <div>

                {this.props.posts.map(post => (
                    <div className ="post">
                        <h3>{post.title}</h3>
                        <h5>Location: {post.attraction}</h5>
                    </div>

                ))}

            <div>
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

export default connect(mapStateToProps, {fetchPosts, postPost})(Content)