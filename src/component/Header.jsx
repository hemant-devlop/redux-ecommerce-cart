import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css'
const Header = () => {
  const data=useSelector((state)=>state.cart.count)
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" sticky='top'>
      <Container>
        <Nav.Link className='fw-bold fs-3 text-light' as={Link} to="/">E commerce</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
          </Nav> 
          <Nav className="ml-auto text-center">
            <div className='cart-logo'>
              <span className="cart-badge badge rounded-pill start-50">{data.length}</span>
            <Link to='/cart'><i className="bi bi-cart fs-2 text-light"></i></Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
