import React from 'react'
import './login.css'
import Lognav from '../Lognav/Lognav'

export default function Login() {
  return (
<>
       <Lognav/>
   

    <div className="outer" id="loginBox" >
    <div className="inner">
    
    <form>
    <h3 id="para">Login</h3>

    
   
    <div className="form-group" id="email">
        
        <input type="email" className="form-control" placeholder="Enter email" required name="email"/>
    </div><br/>

    <div className="form-group" id="password">
        
        <input type="password" className="form-control" placeholder="Enter password" required name="password"/>
    </div><br/>

    
    <p className="forgot-password text-right">
        New user? <a href="/sign-up" id="sign">Signup</a>
    
    </p><br/>
    <button type="submit" id="loginButton" className="btn btn-dark btn-lg btn-block">Login</button>
</form>
</div>
      </div>
    
    </>
  )
  
}
