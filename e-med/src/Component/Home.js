import React from 'react'
import Aboutus from './Aboutus'
import Navbar from './Navbar'
import Service from './Service'
export default function Home() {
  return (
    <>
    <Navbar/>
    <section class="home" id="home">

    <div class="content">
        <h1>Send your medicines via Us</h1>
        <h3>Help us to help others</h3>
        <a href="/" class="btn">Explore More</a>
    </div>

    </section> 
    <Service/>
    <Aboutus/>
    </>
  )
}
