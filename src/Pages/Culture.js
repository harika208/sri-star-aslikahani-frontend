import React from 'react'
import { Link } from "react-router-dom";
import "../Routes/LinkRoutes.css";
import "../StyleSheet/Culture.css"
import { useState,useEffect } from 'react';



function Culture() {

  const [Culturedata, setCulturedata] = useState([])
  useEffect(() => {
    const url = "https://magzine-backend-sristar1.onrender.com/culture"
    
    fetch(url).then(res => res.json())
      .then(res => setCulturedata(res))
  }, [])


  return (
    <>
      <div className='nav'>
      
      <Link to={"/"} className='space' >Home</Link>
      <Link to={"/entertainment"} className='space'>Entertainment</Link>
      <Link to={"/education"} className='space'>Education</Link>
      <Link to={"/technology"} className='space'>Technology</Link>
      <Link to={"/business"} className='space'>Business</Link>
      <Link to={"/travel"} className='space'>Travel</Link>
      <Link to={"/lifeStyle"} className='space'>LifeStyle</Link>
      <Link to={"/culture"} className='space' >Culture</Link>
    </div>


<div className='top'>
    <div className='recent'>RECENT POSTS</div>
    <h1 className='main-head'>CATEGORY:<span className='main-head1'>CULTURE</span></h1>
    <div className='about'>ABOUT US</div>
    </div>   
    <div className='uline'>_____________________________________________________</div>
    <div className='uline1'>__________________________________________________</div>

<br></br>
<div className='head-one'>
      <div className='column1'>
        <div className='left1'></div>
        <div className='left2'></div>
        <div className='left3'></div>
        <div className='left4'></div>
        <div className='left5'></div>
        <div className='left6'></div>
        <div className='left7'></div>
        <div className='left8'>Advertisement</div>
        
      </div>

      <div className='column2'>
        <div className='mid1'></div>
        <div className='mid2'></div>
        <div className='mid3'></div>
        <div className='mid4'></div>
        <div className='mid5'></div>
        <div className='mid6'></div>
        <div className='mid7'></div>
        <div className='mid8'></div>
        <div className='mid9'></div>
      </div>

      <div className='column3'>
         <div className='right1'></div>
         <div className='right2'></div>
         <div className='right3'>
         <div className='right31'></div>
         <div className='right32'></div>
         </div>
         <div className='right4'>
         <div className='right41'></div>
         <div className='right42'></div>
         </div>
         <div className='right5'>
         <div className='right51'></div>
         <div className='right52'></div>
         </div>
         <div className='right6'>
         <div className='right61'></div>
         <div className='right62'></div>
         </div>
         <div className='right7'>Advertisement</div>
      </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>




<div className='head-box'>

  <div className='boxcolumn1'>
  <div className='boxcolumn11'></div>
  <div className='boxcolumn12'></div>
  </div>

  <div className='boxcolumn2'>
  <div className='boxcolumn21'></div>
  <div className='boxcolumn22'></div>
  <div className='boxcolumn23'></div>
  <div className='boxcolumn24'></div>
  </div>

  <div className='boxcolumn3'>
  <div className='boxcolumn31'></div>
  <div className='boxcolumn32'></div>
  <div className='boxcolumn33'></div>
  <div className='boxcolumn34'></div>
  </div>

  <div className='boxcolumn4'>
  <div className='boxcolumn41'></div>
  <div className='boxcolumn42'></div>
  <div className='boxcolumn43'></div>
  <div className='boxcolumn44'></div>
  </div>
</div>

<br></br>
<br></br>
<br></br>

<div className='lastblack'>
  <div className='lastblack1'></div>
  <div className='lastblack2'></div>
</div>
    </>
  )
}

export default Culture;
