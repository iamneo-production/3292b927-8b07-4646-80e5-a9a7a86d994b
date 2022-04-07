import React, {useState} from 'react'
import Navbar from '../Navbar/Navbarcomponent'
import ImagePreview from './Image'
import './Addisssue.css' 
export default function Addissue() {

    const [imageURL , setImageURL] = useState("");

  return (
      <>
      <Navbar/>
    <div id="addHomeBody" className="outer">
    <div className="inner1000">
    
    <form>
    <p id="para1">Add issue</p>

    <div className="form-group" id="name">
        <p>Name of issue</p>
        <input type="text" className="form-control" />
    </div><br/>

    <div  id="description">
        <p>Description</p>
        <input type="text" className="form-control" />
    </div><br/>
    
         
     URL<input type="url" className="form-control" id="imageURL" onChange={(e)=>setImageURL(e.target.value)} />
    <br/>

    <div className="form-group" id="imagePreviewArea">
    
    {
       imageURL ? <img src={imageURL} alt="imageUrl" onError={(event) => event.target.style.display = 'none'}/> : <ImagePreview/>
   }

    
    </div><br/>

    
    
    <button type="submit" id="submitButton" className="btn btn-dark btn-lg btn-block">Submit</button>
</form>
</div>
      

    </div>
    </>
  )
}