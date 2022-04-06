import React from 'react'
import { Row,Col,Nav,Tab,Card } from 'react-bootstrap'
import  './Adminhome.css'
import Anav from '../Adminnav/Anav'
import Adgrid from './Grids/Adgrid'
export default function Ahome() {

  const count = 10003;
  const num1 = 358;
  const num2 = 1;
  
  const num4 = 73;
  const num5 = 30000;
  
  return (
    <>
     <Anav/>
     <div id="adminHomeBody">
        <Row>
          <Col md={9}>
          <Tab.Container defaultActiveKey="link1" id="blink">
          <Nav variant="tabs">
             <Row>
             <Col md={2}>
                  <Nav.Item id="newButton">
                    <Nav.Link eventKey="link1" >New</Nav.Link>
                  </Nav.Item>
               </Col>
               <Col md={2}>
                  <Nav.Item id="activeButton">
                    <Nav.Link eventKey="link2" >Active</Nav.Link>
                  </Nav.Item>
               </Col>
               <Col md={2}>
                  <Nav.Item id="solvedButton">
                    <Nav.Link eventKey="link3" >Solved</Nav.Link>
                  </Nav.Item>
               </Col>
             </Row>
            </Nav>
            <Row>
              <Col>
              <Tab.Content>
                <Tab.Pane eventKey="link1" >
                  <Adgrid/>
                </Tab.Pane>
                <Tab.Pane eventKey="link2" >
                  
                </Tab.Pane>
              </Tab.Content>
              </Col>
            </Row>
            </Tab.Container>
          </Col>
          <Col md={3}>
          <Card style={{ width: '25rem' }} id="blac" className="inner333">
              <Card.Body id="adminSideUserDetails" >
                
                <center><p id="admin">Admin</p></center><br/><br/><br/> 
                
                <i id="users">Users : {count}</i><br/><br/>
                <i id="developers">Developers : {num1}</i><br/><br/>
                <i id="newissue">New issue : {num2}</i><br/><br/>
                <i id="solvedissue">Solved issue : {num5}</i><br/><br/>
                <i id="activeissue">Active issue : {num4}</i><br/><br/>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </div>
    </>
  )
}