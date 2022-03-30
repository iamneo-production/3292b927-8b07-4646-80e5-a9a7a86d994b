import React, { useState } from 'react'
import { Col, Row, Stack ,Button,Modal,Dropdown} from 'react-bootstrap'
import './Dgrid.css'
// import Dstatus from './Dstatus'
import { FaEdit } from 'react-icons/fa'
const Admin = () => {
  let Id = useState()
  let [issue] = useState()
  let [CreatedOn] = useState()
  let [dev] = useState()
  let [status] = useState()
  };
class AdminGrid extends React.Component{
 
  state={
    isopen: false,
   
  };
  openModel=() => this.setState({isOpen:true});
  closeModel=() => this.setState({isOpen:false});
  render(){
    

 
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
     <Modal show={this.state.isOpen} onHide={this.closeModel} className="inner93" >
        <Modal.Body className="inner100">
         <div  className="inner4"  id="twelve"> 
         
          <div id="selectStatus">
            
           {/* <Dropdown id="twe"> */}
           
           <Dropdown >
           <Dropdown.Toggle id="twe">
          <i> Select the Status</i>
          </Dropdown.Toggle>
           <Dropdown.Menu className="inner111">
           <Dropdown.Item href="/action-1" id="asap1"><p id="aaa">Active</p></Dropdown.Item>
           <Dropdown.Item href="/action-2" id="asap2"><p id="bbb">Solved</p></Dropdown.Item>
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
             <Button id="bu"  onClick={this.openModel}>
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
}

export default AdminGrid