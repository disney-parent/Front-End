import React from "react"
import { connect } from "react-redux";
import { fetchPosts, fetchComments, postComment, deletePost } from "../actions";
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

    reload = () => {
        setTimeout(() => window.location.reload(), 500)
        }

    postComment = e => {
        e.preventDefault();
        e.persist();
        const newComment = { 
            username: localStorage.getItem("username"),
            comment: this.state.comment,
            post_id: this.state.id
        }
        this.setState({
            ...this.state,
            comments:[...this.state.comments, newComment]
        })

        this.props.postComment(newComment);
        this.setState({
            ...this.state,
            comment: ''
        })
        this.reload()
    }

    deletePost = e => {
        e.preventDefault();
        this.props.deletePost(this.state.id)
        setTimeout(() => this.props.history.push("/"), 500)
    }

    render(){
    
    console.log("Hi this is username:", this.props.username)
    

    const id = this.props.match.params.id;

    const post= this.props.posts.find(post => 
       `${post.id}` === id )
        
    const comments=this.props.comments.filter(comments => `${comments.post_id}` === id)

    if (!post){
        return(
            <h1>Loading...</h1>
        )
    }
            
        return (
            <div className = "mainpage">
                <img src={Castle} alt="Disney Castle" />

               
                        <div className ="comments-post">
                            <h2>{post.title}</h2>
                            <h4>@ {post.attraction}</h4>
                            <h5>{post.time}</h5>
                            <h5>{post.children} kids</h5>
                            <button
                                onClick={this.deletePost}>X</button>
                            
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

export default connect(mapStateToProps, { fetchPosts, fetchComments, postComment, deletePost })(Comments)