import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Content from "./components/Content"

function App() {
  return (
    <div className="App">

      <Login />
      <Register />
      <Content />

    </div>
  );
}

export default App;
