import React,{useContext, useState} from "react";
import notescontext from "../Component/context/notes/notecontext"
const Productitem = (props) => {
  const [font,setfont]=useState("Take order")
  const[on,seton]=useState("0")
  const[on1,seton1]=useState("none")
  const context=useContext(notescontext)
  const {deletenote}=context;
  const { products,updatenotes,showalert } = props;
  const handleclick=()=>{
    setfont("Order confirmed")
    seton("none")
    seton1("0")
    // setTimeout(() => {
    //   deletenote(notes._id)
    // }, 5000);
    
  }
  const cancelorder=()=>{
    setfont("Take order")
    seton1("none")
    seton("0")
  }
  return (
    <div className="col-md-3"style={{"font-size":"15px"}} >
      <div className="card my-3">
        <div className="card-body border border-success rounded ">
            <div className="d-flex align-items-center">
            <h5 className="card-title me-4 blockquote">{products.name}</h5>
          <button className={`btn btn-outline-success my-2  d-${on1}`} onClick={()=>{cancelorder()}}>Cancel</button>
            </div>
            <h6 class="card-subtitle mb-2 text-muted">{products.quantity}</h6>
          <p className="card-text">{products.purpose}</p>
          <button  className={`btn btn-outline-success my-2  d-${on}` }type="submit" onClick={handleclick}>Book</button>
          <h1>{font}</h1>
        </div>
      </div>
    </div>
    //main
  );
};

export default Productitem;
