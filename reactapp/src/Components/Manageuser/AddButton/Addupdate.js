import React from 'react'
import{Modal,Button} from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import './Addupdate.css'
class Addup extends React.Component{
 
    state={
      isopen: false,
     
    };
    openModel=() => this.setState({isOpen:true});
    closeModel=() => this.setState({isOpen:false});
    render(){
  return (
      <>
    <div>
        <Modal show={this.state.isOpen} onHide={this.closeModel} className="inner1001">
            <Modal.Body className="inner1002">
              
                
              <form >
              <center><p id="some">Add/Update</p></center><br/><br/><br/> 

              
                <div className="form-group" >
                    
                    <input type="text" className="form-control" placeholder="Enter Name" name="name" required />
                </div><br/>
                
                <div className="form-group" >
                    
                    <input type="email" className="form-control" placeholder="Enter email" name="email" required />
                </div> <br/>

                <div className="form-group" >
                    
                    <input type="text" className="form-control" placeholder="Enter username" name="username" required />
                </div><br/>
                

                <div className="form-group" >
                    
                    <input type="password" className="form-control" placeholder="Enter password" name="password" required/>
                </div><br/>
                     <div id="updateButton" >
                    <button type="submit" id="mbutton" className="btn btn-dark btn-lg btn-block" >Add/Update</button>
                    </div>
            </form> 
                
                
                
             
            </Modal.Body>
            </Modal>
    </div>
    <div >
    <Button id="AddButton"  onClick={this.openModel} >
        <FaPlus/>
    </Button>
    </div>
    </>
  )
}
}
export default Addup