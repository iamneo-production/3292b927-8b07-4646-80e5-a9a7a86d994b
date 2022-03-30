import React from 'react'
//  import './Anav.css'
import {Navbar,Container,Nav} from 'react-bootstrap'

export default function Navbarcomponent() {
  return (
    <>
    <div className="container-fluid">
    <div className="b">
    <Navbar>
    <div className="basic"> <h3>Grievance Cell</h3> </div>
  <Container id="an">
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      
      
      <Nav id="c">
        <Nav.Link href="#" id="homebutton">Home</Nav.Link>
        <Nav.Link href="#" id="addButton">Add+</Nav.Link>
        <button id="logoutButton" className="btn btn-primary">Logout</button>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
</div>
</>
  )
}
