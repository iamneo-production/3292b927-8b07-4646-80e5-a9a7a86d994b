import React , {useState} from 'react'
import { Col, Row, Stack ,Button,Modal,Dropdown} from 'react-bootstrap'
import './Dgrid.css'
import { FaEdit } from 'react-icons/fa'

export default function Dgrid(){
 
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
    
    <div  className="inner5"  id="grid1">
      
      <Row>
        <Col>
          <Stack direction='horizontal' gap={3}>
            <div id="fl">
             {Admin.Id} #272177621
            </div>
            <div className='ele'>
              Issue {Admin.issue}
              <p id="con">Damage issue</p>
            </div>
            <div className='ele'>
              Created On {Admin.CreatedOn}
              <p id="con" >20/01/2022</p>
            </div>
            <div className='ele'>
              Developer {Admin.dev}
              <p id="con">Not Mapped</p>
            </div>
            <div className='ele'>
              Status {Admin.status}
              <p id="con">Active</p>
            </div>
            <div id="editStatus" >
            <div >
              <Row>
                <Col md={2}>
     <Modal show={openModel} onHide={openModel} className="inner93" >
        <Modal.Body className="inner100">
         <div  className="inner4"  id="twelve"> 
         
          <div id="selectStatus">
            
           {/* <Dropdown id="twe"> */}
          
           <Dropdown >
             
           <Dropdown.Toggle id="twe">
          <i> Select the Status</i>
          </Dropdown.Toggle>
           <Dropdown.Menu className="inner111">
           <Dropdown.Item href="/" eventKey="1" id="asap1"><p id="aaa">Active</p></Dropdown.Item>
           <Dropdown.Item href="/" eventKey="2" id="asap2"><p id="bbb">Solved</p></Dropdown.Item>
           </Dropdown.Menu>
           </Dropdown>
           
        {/* </Dropdown>   */}
            </div>
            <div>
             <input type="text" id="issueDescription" placeholder="Issue Description"/>
            
            
            </div>
            <div>
              <Button id="upateButton">
                Update
              </Button>
            </div>
            
    </div>
    </Modal.Body>
    </Modal>
    </Col>
              </Row>
    </div>
             <Button id="bu"  onClick={()=>setOpenModel(!openModel)}>
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
