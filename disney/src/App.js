import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Content from "./components/Content";
import Comments from "./components/Comments";
import { Route } from "react-router-dom"
import { connect } from "react-redux";
import { fetchPosts, fetchComments } from "./actions";

class App extends React.Component {

  componentDidMount(){
    this.props.fetchPosts()
    this.props.fetchComments()
}

  render(){
  return (
    <div className="App">
      <NavBar />
      <Route exact path = "/login" component={Login} />
      <Route exact path = "/register" component={Register} />
      <Route exact path = "/" component={Content}/>
      <Route exact path = "/posts/:id" component={Comments} />

    </div>
  );
}
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { fetchPosts, fetchComments })(App)
