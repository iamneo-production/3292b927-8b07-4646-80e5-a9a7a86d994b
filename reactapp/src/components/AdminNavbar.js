import React from 'react'
import {Nav, Navbar, Container ,Row,Col,Button} from 'react-bootstrap';
import "./Components.css";
const AdminNavbar = () => {
    
  return (
      <>
      {/* NavBar  */}
      <div>
        <Navbar bg="warning" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><b>Grievence Cell</b></Navbar.Brand>
              <Nav className="">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Logout">Logout</Nav.Link>
                
              </Nav>
          </Container>
        </Navbar>
      </div>

      <div>
        <Container>
          <Row>
            <Col md={1}><Button className="btn my-2 " variant="light">New</Button> </Col>
            <Col md={1}><Button className="btn my-2" variant="light">Active</Button> </Col>
            <Col md={1}><Button className="btn my-2" variant="light">Solved </Button> </Col>
            <hr  style={{color:"black"}}/>
          </Row>
        </Container>
      </div>
      </>
  )
  
  
}
export default AdminNavbar;