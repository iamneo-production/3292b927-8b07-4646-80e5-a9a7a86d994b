import React from 'react'
 import './nav.css'
import {Navbar,Container,Nav} from 'react-bootstrap'

export default function Navbarcomponent() {
  return (
    <>
    <div className="container-fluid" id="liss">
    <div className="b">
    <Navbar>
    <div className="basic"> <h3>Grievance Cell</h3> </div>
  <Container id="an">
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      
      
      <Nav id="c">
        <Nav.Link href="#" id="homebutton">Home</Nav.Link>
        <Nav.Link href="/addissue" id="addButton">Add+</Nav.Link>
        <Nav.Link href="/" id="logoutButton">Logout</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
</div>
</>
  )
}
