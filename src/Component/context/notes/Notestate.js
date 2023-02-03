import React, { useState } from "react";
import noteContext from "./notecontext";
const Notestate=(props)=>{
  const host="http://localhost:5500"
    const notesinitial=[]
    const productinitial=[]
    const [notes,setNotes]=useState(notesinitial)
    const [products,setproducts]=useState(productinitial)
    const[details,setdetails]=useState({name:"",number:"",address:""})
    const getdetails=(name,number,address)=>{
      setdetails({name:name,number:number,address:address})
    }

    //get all notes
    const getnotes=async()=>{
      //To do API call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }, 
      });
      const json=await response.json()
      console.log(json)
      setNotes(json)
    }
    //get all products
    const getproducts=async()=>{
      //To do API call
      const response = await fetch(`${host}/api/ngo/fetchallproducts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }, 
      });
      const json=await response.json()
      console.log(json)
      setproducts(json)
    }
    //personal notes
    const personalnotes=async()=>{
      //To do API call
      const response = await fetch(`${host}/api/notes/fetchyournotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        }, 
      });
      const json=await response.json()
      console.log(json)
      setNotes(json)
    }
    //Add a note
    //for adding we first made note which we have to add which we taken from client(frontend) with parameters of addnote in which i use onchange and onclick and add value given as name list and location and then add them to new notes name and finally i used concat function to add that notes in then end of list or data.
    const addnote=async(name,description,expdate,personalname,number,address)=>{
      //To do API call
      const response = await fetch(`${host}/api/notes/Addnotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body: JSON.stringify({name,description,expdate,personalname,number,address}) 
      });
      const note=await response.json()
      console.log(note)
      setNotes(notes.concat(note))//use for adding note in last
        //concat return an array while push updates the array.
    }
    //addproduct
    const addproduct=async(name,purpose,quantity)=>{
      //To do API call
      const response = await fetch(`${host}/api/ngo/Addproducts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body: JSON.stringify({name,purpose,quantity}) 
      });
      const product=await response.json()
      setproducts(products.concat(product))//use for adding note in last
        //concat return an array while push updates the array.
    }
    //Delete a note
    // for deleting i had taken an id from frontend by running deletenote function in given note  and taken id as parameter and then compare given id with notes id if not equal than store it and make new notes without that id wala note.
    const deletenote=async(id)=>{
      //To do api
      const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        }, 
      });
      const json=await response.json()
      console.log(json)
      setNotes(json)
        console.log("deleting the id with id"+id)
        const newnotes=notes.filter((notes)=>{
          return notes._id!==id
        })
        setNotes(newnotes)
        
    }
    //Delete a product
    const deleteproducts=async(id)=>{
      //To do api
      const response = await fetch(`${host}/api/notes/deleteproducts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        }, 
      });
      const json=await response.json()
      console.log(json)
      setproducts(json)
        console.log("deleting the id with id"+id)
        const newproduct=products.filter((product)=>{
          return products._id!==id
        })
        setproducts(newproduct)
        
    }

    //Edit a note
    //for edit note first take parameters from frontend in editnote and than use for loop and input new name,list and location in given id note.
    const editnote=async (id,name,description,expdate)=>{
      // Api call
      const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body: JSON.stringify({name,description,expdate}) 
      });
      const json= await response.json(); 
      console.log(json)
      let newnotes=JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newnotes.length; index++) {
          const element = newnotes[index];
          console.log(element._id)
          if(element._id===id)
          {
            console.log("yess its working")
            newnotes[index].name=name;
            newnotes[index].description=description;
            newnotes[index].expdate=expdate;
            break;
          }
        }
        console.log(newnotes)
        setNotes(newnotes)
    }
    //edit product
    const editproduct=async (id,name,purpose,quantity)=>{
      // Api call
      const response = await fetch(`${host}/api/ngo/updatenotes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body: JSON.stringify({name,purpose,quantity}) 
      });
      const json= await response.json(); 
      console.log(json)
      let newproduct=JSON.parse(JSON.stringify(products))
        for (let index = 0; index < newproduct.length; index++) {
          const element = newproduct[index];
          console.log(element._id)
          if(element._id===id)
          {
            console.log("yess its working")
            newproduct[index].name=name;
            newproduct[index].purpose=purpose;
            newproduct[index].quantity=quantity;
            break;
          }
        }
        console.log(newproduct)
        setNotes(newproduct)
    }

    return(
        <noteContext.Provider value={{notes,getnotes,addnote,deletenote,editnote,getdetails,details,products,personalnotes,getproducts,addproduct,deleteproducts,editproduct}}>
            {props.children}
        </noteContext.Provider>

    )
}
export default Notestate;