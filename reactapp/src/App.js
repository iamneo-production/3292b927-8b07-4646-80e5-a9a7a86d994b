import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/Signup";
import Dhome from './Components/Developerhome/Dhome';
import Ahome from './Components/Adminhome/Ahome';

function App() {
  return (
  <Router>
          <Routes>
              <Route exact path='/' element={<Login/>} />
              <Route path="/sign-in" element={<Login/>} />
              <Route path="/sign-up" element={<SignUp/>} />
              <Route path="/dhome" element={<Dhome/>} />
              <Route path="/ahome" element={<Ahome/>} />
          </Routes>
    </Router>
  );
}
export default App