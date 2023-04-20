import React from "react";

import "./components/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header.js";

import { Outlet } from "react-router-dom";
// import { Container } from "react-dom";


// let SERVER = process.env.REACT_APP_SERVER;
//add comment


class App extends React.Component {
  
  render() {
    
    return (
      <>
        <Header />
        <Outlet/>
     
      </>
    );
  }
}



export default App;


