import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import React from 'react'
import { Link } from 'react-router-dom';

const NavMovies = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Link to='/'><Navbar.Brand href="#home">Home</Navbar.Brand></Link>
      <Nav className="me-auto">
        <Link to='/listmovies'><Nav.Link href="#home">Movies</Nav.Link></Link>
        
       
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavMovies