import React from "react"
import { connect } from "react-redux";
import { fetchPosts, fetchComments } from "../actions";
import Castle from "./Castle.jpg";
import { Link } from "react-router-dom";



class Comments extends React.Component {
    state = {
        comments:[]
    }

    componentDidMount(){
        this.props.fetchPosts()
        this.props.fetchComments()
    }
    // handleChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value 
    //     })
    // }

    render(){
    
    

    const id = this.props.match.params.id;

    const post= this.props.posts.find(post=> `${post.id}` === id)
        
    const comments=this.props.comments.filter(comments => `${comments.post_id}` === id)

    const test = [1 ,2, 3]

    console.log("Hey Jamie, comment:", comments)

    if (!post){
        return(
            <h1>Loading...</h1>
        )
    }
            
        return (
            <div className = "mainpage">
                <img src={Castle} alt="Disney Castle" />

               
                        <div className ="comments-post">
                            <h3>{post.title}</h3>
                            <h5>@ {post.attraction}</h5>
                            <h6>{post.time}</h6>
                            <h6>{post.children} kids</h6>
                        </div>

                        {comments.map(commentObj => (
                            
                            <div>
                                <p>{commentObj.username}</p>
                                <p>{commentObj.comment}</p>
                            </div>
                        ))}

                        {test.map(testObj => (
                            
                            <div>
                                <p>{testObj}</p>
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
        ...state,
        posts: state.posts,
        comments: state.comments,
    }
}

export default connect(mapStateToProps, {fetchPosts, fetchComments})(Comments)