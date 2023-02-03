import React,{useState,useContext} from "react";
import {useNavigate} from 'react-router-dom';
// import Items from "./Items";
import Navbar from "./Navbar";
import notescontext from "../Component/context/notes/notecontext";
const Login = (props) => {
  const[auth,setauth]=useState({email:"",password:""})
  const context = useContext(notescontext);
  const { notes, getdetails} = context;
  let navigate=useNavigate()
  const handleclick=async(e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:5500/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:auth.email,password:auth.password}) 
    });
    const json=await response.json()
    console.log(json.user._id)
    getdetails(json.user.name,json.user.number,json.user.address)
    console.log(json)
    if(json.success)
    {
      //save authtoken and redirect
      localStorage.setItem('token',json.authtoken);
      //useHistory hook
      navigate('/')
      props.showalert("logged in succesfully","success")
    }
    else{
      props.showalert("Invalid details","danger")
    }
  }
  const onchange=(e)=>{
    setauth({...auth,[e.target.name]:e.target.value})//...note says that keep previous all note and add in it after comma wala
  }
  return (
    <>
    {/* <Navbar /> */}
    <div style={{"height":"100vh","width":"100vw","background":"#f1f5fe"}}>
    <h1 className="text-center p-5 fw-bold ">Login Form</h1>
    <div className="container col-4 border d-flex justify-content-center align-items-center  rounded-4 my-3" style={{"margin-top":"10vh","height":"40vh","background":"#ffffff"}}>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fs-2">
            Email address
          </label>
          <input
            type="email"
            className="form-control fs-4"
            id="email"
            name="email"
            value={auth.email}
            aria-describedby="emailHelp"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fs-2"
            id="email"
            name="email"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control fs-4"
            id="password"
            name="password"
            value={auth.password}
            onChange={onchange}
          />
        </div>
        <button type="submit" className="btn fs-3 my-3 btn-outline-success"onClick={handleclick}>
          Submit
        </button>
      </form>
    </div>
    </div>
    </>
  );
};

export default Login;
