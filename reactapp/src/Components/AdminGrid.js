import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { Col, Container, Row, Button, Stack } from 'react-bootstrap'

const AdminGrid = () => {
  let [Id, setId] = useState()
  let [issue, setIssue] = useState()
  let [createdOn, setCreateOn] = useState()
  let [dev, setDev] = useState()
  let [status, setStatus] = useState()
  return (
    <div className='container AdminGridcolor' >
      <Row>
        <Col >
          <Stack direction='horizontal' gap={5}>
            <div>
              Id {Id}
            </div>
            <div className='ele'>
              Issue {issue}
            </div>
            <div className='ele'>
              createdOn {createdOn}
            </div>
            <div className='ele'>
              developer {dev}
            </div>
            <div className='ele'>
              status {status}
            </div>
            <div className='ele'>
              <Button>
                <FaEdit />
              </Button>
            </div>
          </Stack>
        </Col>
      </Row>
    </div>
  )
}
export default AdminGrid
