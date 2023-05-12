import React from 'react';
import { Link } from "react-router-dom";
import "../Routes/LinkRoutes.css";



function Business() {
  return (
    <div>
      <div className='nav'>
      
      <Link to={"/"} className='space'>Home</Link>
      <Link to={"/entertainment"} className='space'>Entertainment</Link>
      <Link to={"/education"} className='space'>Education</Link>
      <Link to={"/technology"} className='space'>Technology</Link>
      <Link to={"/business"} className='space'>Business</Link>
      <Link to={"/travel"} className='space'>Travel</Link>
      <Link to={"/lifeStyle"} className='space'>LifeStyle</Link>
      <Link to={"/cuture"} className='space'>Culture</Link>
    </div>

    <h1 >CATEGORY:<span className='main-head'>BUSINESS</span></h1>

    </div>
  )
}

export default Business
