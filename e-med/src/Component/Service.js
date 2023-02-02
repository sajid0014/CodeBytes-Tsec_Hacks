import React from 'react'
import {Link} from 'react-router-dom'
export default function Service() {
  return (
    <>
      <section class="prevent" id="prevent">

<h1 class="heading"> Our Services </h1>

<div class="box-container">
    
    <div class="box">
    <Link to='/user'><img src="images/pre-1.png" alt=""/></Link>
        <h3>User Section</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, repudiandae aspernatur eum minus accusamus eligendi delectus ad? Similique, facilis esse?</p>
    </div>
    
    
    <div class="box">
    <Link to='/volunteer'><img src="images/pre-2.png" alt=""/></Link>
        <h3>Volunteer Section</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, repudiandae aspernatur eum minus accusamus eligendi delectus ad? Similique, facilis esse?</p>
    </div>
    
    
    <div class="box">
    <Link to='/ngos'><img src="images/pre-3.png" alt=""/></Link>
        <h3>NGO Section</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, repudiandae aspernatur eum minus accusamus eligendi delectus ad? Similique, facilis esse?</p>
    </div>
    

    {/* <div class="box">
        <img src="images/pre-4.png" alt=""/>
        <h3>wash your hand</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, repudiandae aspernatur eum minus accusamus eligendi delectus ad? Similique, facilis esse?</p>
    </div>

    <div class="box">
        <img src="images/pre-5.png" alt=""/>
        <h3>use napkin</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, repudiandae aspernatur eum minus accusamus eligendi delectus ad? Similique, facilis esse?</p>
    </div>

    <div class="box">
        <img src="images/pre-6.png" alt=""/>
        <h3>wear a mask</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, repudiandae aspernatur eum minus accusamus eligendi delectus ad? Similique, facilis esse?</p>
    </div> */}

</div>

</section>

    </>
  )
}
