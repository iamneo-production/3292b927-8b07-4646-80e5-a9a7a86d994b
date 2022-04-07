import React from  'react'
import './Dstatus.css'
import { Button,Dropdown,Modal } from 'react-bootstrap'

 function Dstatus() {
  return (
    <>
    <div>
     <Modal>
        <Modal.Body>
         <div  className="inner4"  id="twelve">
          <div className="container" id="selectStatus">
            <p>Select the Status</p>
           <Dropdown id="twe">
           <Dropdown.Menu defaultActiveKey="/action-1">
           <Dropdown.Item href="/action-1" id="asap1"><p>Active</p></Dropdown.Item>
           <Dropdown.Item href="/action-2" id="asap2"><p>solved</p></Dropdown.Item>
           </Dropdown.Menu>
        </Dropdown>  
            </div>
            <div id="issueDescription">
              <br></br>
            <p>Issue Description</p>
            </div>
            <div>
              <Button id="upateButton" onClick={""}>
                Update
              </Button>
            </div>
    </div>
    </Modal.Body>
    </Modal>
    </div>
    </>
  );
}
export default Dstatus;
