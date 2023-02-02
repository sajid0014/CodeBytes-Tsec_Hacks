import React,{useContext, useState} from 'react'
import Notes from './Notes'
import notescontext from "../Component/context/notes/notecontext"
const Addnotes = (props) => {
  const {showalert}=props
  const context=useContext(notescontext)
  const {addnote}=context;
  const[note,setNote]=useState({name:"",description:"",expdate:""})
  const[op,setop]=useState("0")
  const handleclick=(e)=>{
    e.preventDefault()
    addnote(note.name,note.description,note.expdate);//here we are adding note whose state is changed using onchange.
    setNote({name:"",description:"",expdate:""})
    props.showalert("Added note succesfully","success")
    setop("100")
    setTimeout(() => {
      setop("0")
    }, 2000);
  }
  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})//...note says that keep previous all note and add in it after comma wala
  }
  return (
    <div>
      <h1 className='my-3'>Register For donating medicine</h1>
      <div className="mb-3 mt-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Medicine Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name='name'
          onChange={onchange} minLength={5} required value={note.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name='description'
          onChange={onchange} minLength={5} required value={note.description}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Expiry date
        </label>
        <input
          type="Date"
          className="form-control"
          id="expdate"
          name='expdate'
          onChange={onchange} minLength={10} required value={note.expdate}
        />
      </div>
      <button disabled={note.name.length<5} className="btn btn-outline-success" type="submit" onClick={handleclick}>Add</button>
      <div className={`h-16 text-center pt-2 text-[30px] my-10 rounded-2xl bg-green-400 opacity-${op}`}>
        <h1> Thank you For Helping us to stop food waste and donate them to the one who need it</h1>
      </div>
      <div className={`h-16 text-center pt-2 text-[30px] my-10 rounded-2xl bg-green-400 opacity-${op}`}>
        <h1> Our Volunteers will call you back for taking food</h1>
      </div>
    </div>
  )
}

export default Addnotes
