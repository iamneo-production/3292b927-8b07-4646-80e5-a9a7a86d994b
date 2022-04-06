import React ,{useState} from 'react'
import './Agrid.css'
import { Col, Row, Stack } from 'react-bootstrap'
const Grid2 = () => {
    let [Id] = useState()
    let [issue] = useState()
    let [CreatedOn] = useState()
    let [dev] = useState()
    let [status] = useState()
    return (
      <>
      
      <div  className="inner11"  id="grid2">
        <Row>
          <Col>
            <Stack direction='horizontal' gap={3}>
              <div id="fl">
               {Id} #39412049
              </div>
              <div className='ele1'>
                Issue {issue}
                <p id="con1">Product issue</p>
              </div>
              <div className='ele1'>
                Created On {CreatedOn}
                <p id="con1" >02/02/2022</p>
              </div>
              <div className='ele1'>
                Developer {dev}
                <p id="con1">Mr.ABC</p>
              </div>
              <div className='ele1'>
                Status {status}
                <p id="con1">Active</p>
              </div>
              
            </Stack>
          </Col>
        </Row>
      </div>
      
      </>
    )
  }
  export default Grid2