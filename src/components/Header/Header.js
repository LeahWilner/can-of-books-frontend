import React from "react";
import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import './header.css';



class Header extends React.Component {
  render() {
    return (

      <>
      <header>Good Reads</header>
      <Navbar bg="dark" variant="dark" className="nav">
        <Container>
    
          <Nav className="navigation">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      </>
    );
  }
}


export default Header;