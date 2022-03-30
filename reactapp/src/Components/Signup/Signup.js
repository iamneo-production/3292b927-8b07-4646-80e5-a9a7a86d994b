import React from 'react'
//import './signup.css'
import Lognav from '../Lognav/Lognav'

function Validate() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
};




export default function Signup() {
   
  return (
      <>
    <Lognav/>
    <div className="outer">
    <div className="inner">
    
    <form>
                <h3>Signup</h3>

              

                
                <div className="form-group" id="email">
                    
                    <input type="email" className="form-control" placeholder="Enter email" name="email" required />
                </div> <br/>

                <div className="form-group" id="username">
                    
                    <input type="text" className="form-control" placeholder="Enter username" name="username" required />
                </div><br/>
                <div className="form-group" id="mobilenumber">
                    
                    <input type="number" className="form-control" placeholder="Enter mobilenumber" name="mobilenumber" required />
                </div><br/>

                <div className="form-group" id="password">
                    
                    <input type="password" className="form-control" placeholder="Enter password" name="password" required/>
                </div><br/>
                <div className="form-group" id="confirmPassword">
                    
                    <input type="password" className="form-control" placeholder="Confirm password" name="confirmPassword" required />
                </div><br/>


                
                <p className="forgot-password text-right">
                    Already a user? <a href="/" id="signinLink">Login</a></p>  <br/>
                    <button type="submit" id="submitButton" className="btn btn-dark btn-lg btn-block" onClick={Validate.password}>Submit</button>
                
            </form>
            </div>
      </div>
      </>
  )
}

// function Validate() {
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;
//     if (password !== confirmPassword) {
//         alert("Passwords do not match.");
//         return false;
//     }
//     return true;
// }
