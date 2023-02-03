import React, { useContext, useEffect, useRef,useState } from "react";
import notescontext from "../Component/context/notes/notecontext";
import Noteitem from "./Noteitem";
import {useNavigate} from 'react-router-dom';
import Productitem from "./Productitem";
// import Dashboard from "./Dashboard";
const Product = (props) => {
  const context = useContext(notescontext);
  let navigate=useNavigate()
  const { products, getproducts ,editproduct,personalnotes} = context;
//   const[statr,setstatr]=useState("personal")
  useEffect(() => {
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')){
      console.log("token is there")
      getproducts();
  }
    else{
      console.log("error he bro")
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);
  const[product,setproduct]=useState({id:"",ename:"",epurpose:"",equantity:""})
  
  const updatenotes = (currentnote) => {
    ref.current.click();
    setproduct({id:currentnote._id,ename:currentnote.name,epurpose:currentnote.purpose,equantity:currentnote.quantity})
  };
  const handleclick=(e)=>{
    console.log("updating notes")
    editproduct(product.id,product.ename,product.epurpose,product.equantity)
    refclose.current.click();
    props.showalert("updated note succesfully","success")
   
  }
  const onchange=(e)=>{
    setproduct({...product,[e.target.name]:e.target.value})//...note says that keep previous all note and add in it after comma wala
  }
  //use ref is use to give reference if you want to click on any other without clicking it you can click on its reference value.
  const ref = useRef(null);
  const refclose=useRef(null);
  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        hidden={true}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-name fs-5" id="exampleModalLabel">
                Make update
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h1>Add a Note</h1>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ename"
                  name="ename"
                  onChange={onchange}
                  value={product.ename} minLength={5} required

                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Purpose
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="epurpose"
                  name="epurpose"
                  onChange={onchange}
                  value={product.epurpose} minLength={5} required
                />
              </div>
              <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Quantity
        </label>
        <input
          type="Number"
          className="form-control"
          id="equantity"
          name='equantity'
          onChange={onchange} minLength={10} required value={product.eexpdate}
        />
      </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refclose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary"onClick={handleclick}disabled={product.ename.length<5}>
                updateproducts
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1 className="text-[30px] my-4 font-bold">{props.text}</h1>
        {products.length===0&&'No notes to display'}
        {products.map((products) => {
          return (
            <>
            <Productitem key={products._id} updatenotes={updatenotes} products={products} showalert={props.showalert}/>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Product;
