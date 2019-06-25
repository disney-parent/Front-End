import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Content from "./components/Content";
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path = "/login" component={Login} />
      <Route exact path = "/register" component={Register} />
      <Route exact path = "/" component={Content}/>

    </div>
  );
}

export default App;
