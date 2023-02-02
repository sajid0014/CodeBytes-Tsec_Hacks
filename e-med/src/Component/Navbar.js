import React from 'react'
import { Link } from 'react-router-dom';
export default function navbar() {
  return (
    <>
     <header>

    <a href="/" class="logo"><i class="fa-solid fa-truck-medical"></i>  E-Med</a>

    <div id="menu" class="fas fa-bars"></div>

    <nav class="navbar">
    <a class="active" href="#home">home</a>
    <a href="#prevent">services</a>
    <a href="#symphrefms">symphrefms</a>
    <a href="#precautions">precautions</a>
    <Link to="/login">Login</Link>
    <Link to="/signup">SignUp</Link>
    </nav>

    </header> 
    </>
  )
}
