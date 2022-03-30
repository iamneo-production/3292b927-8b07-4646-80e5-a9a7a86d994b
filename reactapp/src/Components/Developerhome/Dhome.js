import React from 'react'
import { Row,Col,Nav,Tab,Card } from 'react-bootstrap'
import Navbar from '../Navbar/Navbarcomponent'
import './Dhome.css'
import AdminGrid from './Dgrid'
export default function Dhome() {

  const count = 10;
  const num1 = 3;
  const num2 = 7;
  
  return (
    <>
     <Navbar/>
     <div id="upateHomeBody">
        <Row>
          <Col md={9}>
          <Tab.Container defaultActiveKey="link1" >
          <Nav variant="tabs">
             <Row>
               <Col md={2}>
                  <Nav.Item>
                    <Nav.Link eventKey="link1" id="activeButton">Active</Nav.Link>
                  </Nav.Item>
               </Col>
               <Col md={2}>
                  <Nav.Item>
                    <Nav.Link eventKey="link2" id="solvedButton">Solved</Nav.Link>
                  </Nav.Item>
               </Col>
             </Row>
            </Nav>
            <Row>
              <Col>
              <Tab.Content>
                <Tab.Pane eventKey="link1" >
                  <AdminGrid/>
                </Tab.Pane>
                <Tab.Pane eventKey="link2" >
                  
                </Tab.Pane>
              </Tab.Content>
              </Col>
            </Row>
            </Tab.Container>
          </Col>
          <Col md={3}>
          <Card style={{ width: '25rem' }} id="one" className="inner1">
              <Card.Body id="issueDetails" >
                
                <center><p id="employee">Mr.XYZ</p></center><br/><br/><br/> 
                
                <i id="totalissue">Total issue: {count}</i><br/><br/><br/>
                <i id="activeissue">Active issue: {num1}</i><br/><br/><br/>
                <i id="solvedissue">Solved issue: {num2}</i><br/><br/><br/>

              </Card.Body>
            </Card>
          </Col>
        </Row>
        </div>
    </>
  )
}
 