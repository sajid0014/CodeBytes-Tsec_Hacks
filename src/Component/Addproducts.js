import React,{useContext, useState} from 'react'
// import Notes from './Notes'
import Product from './Product'
import notescontext from "../Component/context/notes/notecontext"
// import Navbar from "./Navbar"
const Addproducts = (props) => {
  const {showalert}=props
  const context=useContext(notescontext)
  const {addproduct}=context;
  const[product,setproduct]=useState({name:"",purpose:"",quantity:""})
  const[op,setop]=useState("0")
  const handleclick=(e)=>{
    e.preventDefault()
    addproduct(product.name,product.purpose,product.quantity);//here we are adding note whose state is changed using onchange.
    setproduct({name:"",purpose:"",quantity:""})
    props.showalert("Added note succesfully","success")
    setop("100")
    setTimeout(() => {
      setop("0")
    }, 2000);
  }
  const onchange=(e)=>{
    setproduct({...product,[e.target.name]:e.target.value})//...note says that keep previous all note and add in it after comma wala
  }
  return (
    <>
    {/* <Navbar/> */}
    <div className='container col-6 my-6'>
      <h1 className='my-3'>Enter for giving medicine requirements</h1>
      <div className="mb-3 mt-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name='name'
          onChange={onchange} minLength={5} required value={product.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          medicine name
        </label>
        <input
          type="text"
          className="form-control"
          id="purpose"
          name='purpose'
          onChange={onchange} minLength={5} required value={product.purpose}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Quantity
        </label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          name='quantity'
          onChange={onchange} minLength={10} required value={product.quantity}
        />
      </div>
      <button disabled={product.name.length<5} className="btn btn-outline-success" type="submit" onClick={handleclick}>Add</button>
      <div className={`h-16 text-center pt-2 text-[30px] my-10 rounded-2xl bg-green-400 opacity-${op}`}>
        <h1> Thank you For Helping us, We will let you know once the requirements are available.</h1>
      </div>
      <div className={`h-16 text-center pt-2 text-[30px] my-10 rounded-2xl bg-green-400 opacity-${op}`}>
        <h1> Our Volunteers will let you know regarding the same</h1>
      </div>
    </div>
    <product text={"Personal dashboard"} stat="personal"/>
    </>
  )
}

export default Addproducts
