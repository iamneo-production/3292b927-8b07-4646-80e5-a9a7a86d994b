import React ,{useState} from 'react'
import './Agrid.css'
import { Col, Row, Stack } from 'react-bootstrap'
const Grid1 = () => {
    let [Id] = useState()
    let [issue] = useState()
    let [CreatedOn] = useState()
    let [dev] = useState()
    let [status] = useState()
    return (
      <>
      
      <div  className="inner21"  id="grid1">
        <Row>
          <Col>
            <Stack direction='horizontal' gap={3}>
              <div id="fl">
               {Id} #272177621
              </div>
              <div className='ele1'>
                Issue {issue}
                <p id="con1">Damage issue</p>
              </div>
              <div className='ele1'>
                Created On {CreatedOn}
                <p id="con1" >20/01/2022</p>
              </div>
              <div className='ele1'>
                Developer {dev}
                <p id="con1">Mr.XYZ</p>
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
  export default Grid1
