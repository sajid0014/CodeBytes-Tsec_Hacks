import React,{useContext} from 'react'
import Aboutus from './Aboutus'
import Footer from './Footer'
import Navbar from './Navbar'
import Service from './Service'
import notescontext from "../Component/context/notes/notecontext";
export default function Home() {
  const context = useContext(notescontext);
  const { details} = context;
  return (
    <>
    <Navbar/>
    <section class="home" id="home">

    <div class="content">
      <h1>Welcome {details.name}!</h1>
        <h1>Send your medicines via Us</h1>
        <h3>Help us to help others</h3>
        <a href="/" class="btn">Explore More</a>
    </div>

    </section> 
    <Service/>
    <Aboutus/>
    <Footer/>
    </>
  )
}
