import React,{useContext, useState} from "react";
import notescontext from "../Component/context/notes/notecontext"
const Dashboard = (props) => {
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
    
  }
  const cancelorder=()=>{
    setfont("Take order")
    seton1("none")
    seton("0")
  }
  return (
    <div className="col-md-3" >
      <div className="card my-3">
        <div className="card-body border border-success rounded ">
            <div className="d-flex align-items-center">
            <h5 className="card-title me-4 blockquote">{notes.name}</h5>
          <i className="fa-solid fa-pen-to-square mx-2"onClick={()=>{updatenotes(notes)}}></i>
            </div>
            <h6 class="card-subtitle mb-2 text-muted">{notes.expdate}</h6>
          <p className="card-text">{notes.description}</p>
          <button  className={`btn btn-outline-success my-2  d-${on}` }type="submit" onClick={()=>{deletenote(notes._id)}}>cancel</button>
        </div>
      </div>
    </div>
    //main
  );
};

export default Dashboard;
