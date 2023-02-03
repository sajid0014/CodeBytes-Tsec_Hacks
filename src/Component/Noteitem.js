import React,{useContext, useState} from "react";
import notescontext from "../Component/context/notes/notecontext"
const Noteitem = (props) => {
  const [font,setfont]=useState("Take order")
  const[on,seton]=useState("0")
  const[on1,seton1]=useState("none")
  const context=useContext(notescontext)
  const {deletenote}=context;
  const { notes,updatenotes,showalert } = props;
  const handleclick=()=>{
    setfont("Order confirmed")
    seton("none")
    seton1("0")
    setTimeout(() => {
      deletenote(notes._id)
    }, 5000);
    
  }
  const cancelorder=()=>{
    setfont("Take order")
    seton1("none")
    seton("0")
  }
  return (
    <div className="col-md-3"  style={{"font-size":"15px"}}>
      <div className="card my-3" style={{"background-image": "#f1f5fe", "color":"#000000"}}>
        <div className="card-body border-7 border-primary rounded-4 ">
            <div className="d-flex align-items-center">
            {/* <h5 className="card-title blockquote fs-3" style={{"font-style":"bold"}}>Name: {notes.personalname}</h5>
            <h5 className="card-title blockquote fs-3" style={{"font-style":"bold"}}>Number: {notes.number}</h5>
            <h5 className="card-title blockquote fs-3" style={{"font-style":"bold"}}>Address: {notes.address}</h5> */}
            {/* <h5 className="card-title blockquote fs-3" style={{"font-style":"bold"}}>Address: {notes.address}</h5> */}
            <h5 className="card-title blockquote fs-3" style={{"font-style":"bold"}}>Name: {notes.personalname}</h5>
            
          <button className={`btn btn-outline-info my-2  d-${on1}`} style={{"color":"#000000"}} onClick={()=>{cancelorder()}}>Cancel</button>
            </div>
            <h5 className="card-title blockquote fs-3" style={{"font-style":"bold"}}>Address: {notes.address}</h5>
            <h5 className="card-title blockquote fs-3" style={{"font-style":"bold"}}>Number: {notes.number}</h5>
            <h5 className="card-title blockquote fs-3" style={{"font-style":"bold"}}>Medicine Name: {notes.name}</h5>
            <h6 class="card-subtitle mb-2 fs-3" style={{"color":"#000000"}}>Date: {notes.expdate}</h6>
          <p className="card-text fs-3">{notes.description}</p>
          <button  className={`btn btn-outline-info my-2 fs-4 d-${on}` } style={{"color":"#000000"}} type="submit" onClick={handleclick}>Book</button>
          <h2>{font}</h2>
        </div>
      </div>
    </div>
    //main
  );
};

export default Noteitem;
