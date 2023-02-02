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
    <div className="container my-10">
      <form onSubmit={handleclick}>
      <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={onchange} minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onchange}
            aria-describedby="emailHelp" minLength={5} required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onchange} minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Number
          </label>
          <input
            type="number"
            className="form-control"
            id="number"
            name="number"
            value={number}
            onChange={onchange} minLength={10} maxLength={10} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="address"
            className="form-control"
            id="address"
            name="address"
            value={address}
            onChange={onchange}  required
          />
        </div>
        <button type="submit" className="btn btn-outline-success">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Signup;
