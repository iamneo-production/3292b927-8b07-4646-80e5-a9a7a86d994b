import React from 'react'
import Anav from '../Adminnav/Anav'
import { Row,Col,Nav,Tab,Card } from 'react-bootstrap'
import './Ahome.css'
import Grid1 from './Agrids/Agrid1'
import Grid2 from './Agrids/Agrid2'
export default function Ahome() {
  const count = 5;
  const num1 = 3;
  const num2 = 2;
  return (<>
    <Anav/>
    <div id="userHome"><Row>
          <Col md={9}>
          <Tab.Container defaultActiveKey="link1" id="upateHomeBody">
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
                  <Grid1/>
                  <Grid2/>
                </Tab.Pane>
                <Tab.Pane eventKey="link2" >
                  
                </Tab.Pane>
              </Tab.Content>
              </Col>
            </Row>
            </Tab.Container>
          </Col>
          <Col md={3}>
          <Card style={{ width: '25rem' }} id="blue" className="inner20">
              <Card.Body id="userDetails" >
                
                <center><p id="employee1">User1</p></center><br/><br/><br/> 
                
                <i id="totalissue1">Total issue: {count}</i><br/><br/><br/>
                <i id="activeissue1">Active issue: {num1}</i><br/><br/><br/>
                <i id="solvedissue1">Solved issue: {num2}</i><br/><br/><br/>

              </Card.Body>
            </Card>
          </Col>
        </Row>

    </div>
    </>
  )
}
