import React from 'react'
import { Col, Row, Stack,Button } from 'react-bootstrap'
import { FaEdit ,FaTrash} from 'react-icons/fa'
import './Tabss.css'
export default function Tab1(){
  return (
    
      
     <div className="inner2001" id="grid1">
      <Row>
        <Col>
          <Stack direction='horizontal' gap={3}>
            <div id="f3">
              #272177621
            </div>
          
            <div className='ele4'>
              
              <p id="con6" >Mr.XYZ</p>
            </div>
            <div className='ele4'>
              
              <p id="con6">Developer</p>
            </div>
            
            <div >
            <div>
              <Row>
                <Col md={2}>
     
                </Col>
              </Row>
    </div>
             <Button id="bu1">
          <FaEdit/>
          </Button>
          <Button id="bu2">
          <FaTrash/>
          </Button>
            </div>
            
          </Stack>
        </Col>
      </Row>
    </div>
    
  )
  
}

