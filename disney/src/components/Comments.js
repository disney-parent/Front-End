import React from "react"
import { connect } from "react-redux";
import { fetchPosts, fetchComments, postComment } from "../actions";
import Castle from "./Castle.jpg";
// import { Link } from "react-router-dom";



class Comments extends React.Component {
    state = {
        comments:[],
        username: this.props.username,
        comment: "",
        id: this.props.match.params.id
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

    postComment = e => {
        e.preventDefault();

        const newComment = { 
            username: localStorage.getItem("username"),
            comment: this.state.comment,
            post_id: this.state.id
        }

        this.props.postComment(newComment);
        this.setState({
            comment: ''
        })
    }

    render(){
    
    console.log("Hi this is username:", this.props.username)
    

    const id = this.props.match.params.id;

    const post= this.props.posts.find(post=> `${post.id}` === id)
        
    const comments=this.props.comments.filter(comments => `${comments.post_id}` === id)

    // const test = [1 ,2, 3]
    // console.log("Hey Jamie, comment:", comments)

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
                            
                            <div className="comments">
                                <p className="username">{commentObj.username}</p> 
                                <p>{commentObj.comment}</p>
                            </div>
                        ))}

                        

            <div className="comment-form">
                <input 
                    placeholder="Add comment..." 
                    onChange={this.handleChange}
                    value={this.state.comment}
                    name="comment"/>
                
                <button
                    onClick={this.postComment}>Comment</button>
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
        username: state.username
    }
}

export default connect(mapStateToProps, { fetchPosts, fetchComments, postComment })(Comments)