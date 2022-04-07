import React from 'react'
import Anav from '../Adminnav/Anav'
import {Row,Col, Tab} from 'react-bootstrap'
import Addup from '../Manageuser/AddButton/Addupdate'
import './Manageuser.css'
import Tab1 from './Tabs/Tab1'
import Tab2 from './Tabs/Tab2'
export default function Manageuser() {
  return (
      <>
      <Anav/>
      
    <div id="upateDeveloperManage">
        {/* <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                </tr>
                </thead>
                </Table> */}

    <Row>
        <Col md={9} >
        <Tab.Container >
                <Row >
                 <Col md={3} id="colin">
                 <p id="flea1">ID</p>
                </Col>
                <Col md={3} id="colin">
                <p id="flea2">Name</p>
                </Col>
                <Col md={3} id="colin">
                <p id="flea">Role</p>
                </Col>
                <Col md={3} id="colin">
                <p id="flea3">Options</p>
                </Col>
                </Row>
                <Row>
              <Col>
              <Tab.Content>
                 <Tab1/>
                 <Tab2/>
                {/* <Tab.Pane >
                  
                </Tab.Pane>
                <Tab.Pane >
                  
                </Tab.Pane> */}
              </Tab.Content>
              </Col>
            </Row>
                </Tab.Container>
        </Col>  
        
        <Col md={3}>
            <Addup/>
        </Col>
    </Row>
    </div>
    </>
  )
}
