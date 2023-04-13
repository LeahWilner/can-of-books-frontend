import React from "react";
import "./About.css";
import imgBooks from "./";




class About extends React.Component {


  render() {


    return (
      <>
        <h1>All about Leah and Susan</h1>
        <img src={imgBooks} alt="line drawing of stack of books" width='100vw' />
      </>
    );
  }
}



export default About;


