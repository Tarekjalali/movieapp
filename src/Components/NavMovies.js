import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import React from 'react'

const NavMovies = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Movies</Nav.Link>
        <Nav.Link href="#features">Contact</Nav.Link>
       
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavMovies