import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/Signup";
import Dhome from './Components/Developerhome/Dhome';
import Home from './Components/Home/Home';
import Ahome from './Components/Adminhome/Adminhome';
import Addissue from './Components/Addissue/Addissue';
import Manageuser from './Components/Manageuser/Manageuser'
function App() {
  return (
  <Router>
          <Routes>
              <Route exact path='/' element={<Login/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/home" element={<Home/>}/>
              <Route path="/developerhome" element={<Dhome/>} />
              <Route path="/adminhome" element={<Ahome/>} />
              <Route path="/addissue" element={<Addissue/>} />
              <Route path="/manageuser" element={<Manageuser/>} />
          </Routes>
    </Router>
  );
}
export default App