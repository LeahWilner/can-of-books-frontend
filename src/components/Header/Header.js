import React from "react";
import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
// import "./src/components/Header/Header.css";



class Header extends React.Component {
  render() {
    return (

      <>
      <header>Good Reads</header>
      <Navbar bg="dark" variant="dark" className="nav">
        <Container>
        {/* <Navbar.Brand href="#home">Good Reads</Navbar.Brand> */}
          <Nav className="navigation">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
      </>
    );
  }
}


export default Header;