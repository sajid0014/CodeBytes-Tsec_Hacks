import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
// import Items from "./Items";
import Navbar from "./Navbar";

const Signup = (props) => {
  const[auth,setauth]=useState({name:"",email:"",password:"",number:"",address:""})
  const {name,email,password,number,address}=auth
  let navigate=useNavigate()
  const handleclick=async(e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:5500/api/auth/Createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name,email,password,number,address}) 
    });
    const json=await response.json()
    console.log(json)
    if(json.success)
    {
      //save authtoken and redirect
      localStorage.setItem('token',json.authtoken);
      //useHistory hook
      navigate('/')
      props.showalert("Succesfully created your account","success")
    }
    else{
      props.showalert("This email already exist","danger")
    }
  }
  const onchange=(e)=>{
    setauth({...auth,[e.target.name]:e.target.value})//...note says that keep previous all note and add in it after comma wala
  }
  return (
    <>
    {/* <Navbar /> */}
    <div style={{"height":"100vh","width":"100vw","background":"#f1f5fe"}}>
    <h1 className="text-center p-5 fw-bold ">Sign-Up Form</h1>
    <div className="container col-4 border rounded px-4 " style={{"margin-top":"10vh","background":"#ffffff"}}> 
      <form onSubmit={handleclick}>
      <div className="mb-3 my-3">
          <label htmlFor="exampleInputPassword1" className="form-label fs-2">
            Name
          </label>
          <input
            type="name"
            className="form-control fs-4"
            id="name"
            name="name"
            value={name}
            onChange={onchange} minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fs-2">
            Email address
          </label>
          <input
            type="email"
            className="form-control fs-4"
            id="email"
            name="email"
            value={email}
            onChange={onchange}
            aria-describedby="emailHelp" minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fs-2">
            Password
          </label>
          <input
            type="password"
            className="form-control fs-4"
            id="password"
            name="password"
            value={password}
            onChange={onchange} minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fs-2">
            Number
          </label>
          <input
            type="number"
            className="form-control fs-4"
            id="number"
            name="number"
            value={number}
            onChange={onchange} minLength={10} maxLength={10} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fs-2">
            Address
          </label>
          <input
            type="address"
            className="form-control fs-4"
            id="address"
            name="address"
            value={address}
            onChange={onchange}  required
          />
        </div>
        <button type="submit" className="btn my-3 fs-3 d-flex align-items-center btn-outline-success">
          Submit
        </button>
      </form>
    </div>
    </div>

    {/* <div class="wrapper">
    <h2>Sign Up</h2>
    <form onSubmit={handleclick}>

    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
      <div class="input-box">
        <input type="text" placeholder="Enter your name" id="name" name="name" value={name} onChange={onchange} minLength={5} required/>
      </div>

    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>  
      <div class="input-box">
        <input type="email" placeholder="Enter your email" id="email" name="email" value={email} onChange={onchange} aria-describedby="emailHelp" minLength={5} required/>
      </div>

    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>  
      <div class="input-box">
        <input type="password" placeholder="Create password" id="password" name="password" value={password}
            onChange={onchange} minLength={5} required/>
      </div>

    <label htmlFor="exampleInputPassword1" className="form-label">Number</label>
      <div class="input-box">
        <input  type="number" placeholder="Enter your Phone Number" id="number" name="number" value={number}
            onChange={onchange} minLength={10} maxLength={10} requiredrequired/>
      </div>

    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>  
      <div class="input-box">
        <input type="text" id="address" name="address" value={address} onChange={onchange}  required/>
        {/* <h3>I accept all terms & condition</h3> */}
      {/* </div>


      <div class="input-box button">
        <button type="Submit"></button>
      </div>


      <div class="text">
        <h3>Already have an account? <a href="/login">Login now</a></h3>
      </div>
    </form> */}
  {/* </div> */} 








    </>
  );
};

export default Signup;
