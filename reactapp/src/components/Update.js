import React from 'react'
import { Col, Container, Dropdown, Row, Button } from 'react-bootstrap'
const Update = () => {
  return (
    <Container className='my-2 '>
      <Row md={2}>
        <Col md={5} />
        <Col md={2} className='bgColor'>
          <Dropdown>
            <Dropdown.Toggle variant='light' id='dropdown-basic'>
              Select developer
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={1} className='bgColor'>
          <Button className='' variant='info'>
            Update
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
export default Update
