import React, { useState } from 'react'
import { Col, Row, Stack ,Button,Modal,Dropdown} from 'react-bootstrap'
import './Adgrid.css'
import { FaEdit } from 'react-icons/fa'
export default function Adgrid(){
 
  const [openModel , setOpenModel] = useState(false);
  const Admin = {
    Id : "",
    issue : "",
    CreatedOn : "",
    dev: "",
    status : ""
    };




  return (
    <>
    
    <div  className="inner200"  id="grid1">
      
      <Row>
        <Col>
          <Stack direction='horizontal' gap={3}>
            <div id="f2">
             {Admin.Id} #272177621
            </div>
            <div className='ele4'>
              Issue {Admin.issue}
              <p id="con5">Damage issue</p>
            </div>
            <div className='ele4'>
              Created On {Admin.CreatedOn}
              <p id="con5" >20/01/2022</p>
            </div>
            <div className='ele4'>
              Developer {Admin.dev}
              <p id="con5">Not Mapped</p>
            </div>
            <div className='ele4'>
              Status {Admin.status=''}
              <p id="con5">Active</p>
            </div>
            <div id="editStatus" >
            <div >
              <Row>
                <Col md={2}>
     <Modal  show={openModel} onHide={openModel} className="inner193" >
        <Modal.Body className="inner300">
         <div  className="inner204" > 
         
          <div id="selectDeveloper">
            
           {/* <Dropdown id="twe"> */}
          
           <Dropdown >
             
           <Dropdown.Toggle id="twel">
          <i> Select Developer </i>
          </Dropdown.Toggle>
           <Dropdown.Menu className="inner211">
           <Dropdown.Item href="#" eventKey="1" id="aap1"><p id="aaa1">Mr.XYZ</p></Dropdown.Item>
           <Dropdown.Item href="#" eventKey="2" id="aap2"><p id="bbb1">Mr.ABC</p></Dropdown.Item>
           <Dropdown.Item href="#" eventKey="3" id="aap2"><p id="ccc1">Mr.DEF</p></Dropdown.Item>
           <Dropdown.Item href="#" eventKey="4" id="aap2"><p id="ddd1">Mr.MNO</p></Dropdown.Item>
           </Dropdown.Menu>
           </Dropdown>
           
        {/* </Dropdown>   */}
            </div>
            <br/>
            <br/>
            <br/>
            <div id="updateButton">
              <Button  id="fella">
               <p id="mist">Update</p> 
              </Button>
            </div>
            
    </div>
    </Modal.Body>
    </Modal>
    </Col>
              </Row>
    </div>
             <Button id="bu" onClick={()=>setOpenModel(!openModel)}>
          <FaEdit/>
          
          </Button>
            </div>
          </Stack>
        </Col>
      </Row>
    </div>
    
    </>
  )
  }
