import React from 'react'
import {Link} from 'react-router-dom'
export default function Service() {
  return (
    <>
      <section class="prevent" id="prevent">

<h1 class="heading"> Our Services </h1>

<div class="box-container">
    
    <div class="box">
    <Link to='/user'><img src="images/user.png" alt=""/></Link>
        <h3>User Section</h3>
        <p>Here User can provide information about the medicines that they have and also the expiry date of the medicines. The User will get a dashboard which will show all the product listed by User.</p>
    </div>
    
    
    <div class="box">
    <Link to='/vol'><img src="images/volunteer.jpg" alt=""/></Link>
        <h3>Volunteer Section</h3>
        <p>Here Volunteer can have a look at all the medicines that are putted up by the User. Also the volunteer can click on book button to Book a particular delhivery and can cancel if they want.</p>
    </div>
    
    
    <div class="box">
    <Link to='/ngos'><img src="images/ngo.png" alt=""/></Link>
        <h3>NGO Section</h3>
        <p>Here NGO can put up their requirements for the medicines and also the quantity for the same, they will also get the dashboard about their requests. They can also edit their requests.</p>
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
