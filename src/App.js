import './App.css';
import { Routes, Route } from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Notestate from './Component/context/notes/Notestate';
import { useState } from 'react';
import Aboutus from './Component/Aboutus';
// import Community from './Component/Community';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Service from './Component/Service';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Alert from './Component/Alert';
import User from './Component/User'
import Volunteer from './Component/Volunteer'
import Ngos from './Component/Ngos'

function App() {
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
  return (
    <>
    <Notestate>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home showalert={showalert}/>}></Route>
      <Route exact path="/login" element={<Login showalert={showalert}/>}></Route>
      <Route exact path="/signup" element={<Signup showalert={showalert}/>}></Route>
      <Route exact path="/user" element={<User/>}></Route>
      <Route exact path="/vol" element={<Volunteer/>}></Route>
      <Route exact path="/ngos" element={<Ngos/>}></Route>
      {/* <Community/> */}
      </Routes> 
    </Router>
    </Notestate>
    </>
  );
}

export default App;
