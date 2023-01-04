import React from "react";
import {Navbar,Nav} from 'react-bootstrap'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';




//import NavDropdown from 'react-bootstrap/NavDropdown';

export default function navbar(name) {



  return (
    <>
   <Navbar  bg={name.bg} variant={name.variant}>
    <Container>
      <Navbar.Brand to="#home">{name.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        
        </Nav>
      </Navbar.Collapse>
    </Container>
   {/* <Button className='btn1' onClick={name.toggleMode} variant={name.dark}>Dark Mode</Button> */}
   <Button  onClick={name.toggleMode} variant="dark">Dark Mode</Button>
  </Navbar>
  </>
  )
}

navbar.propTypes = {
    name: PropTypes.string,
  }