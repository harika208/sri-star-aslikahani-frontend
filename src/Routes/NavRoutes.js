import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Technology from "../Pages/Technology"
import  Entertainment from "../Pages/Entertainment"
import Travel from "../Pages/Travel"
import Business from "../Pages/Business"
import LifeStyle from "../Pages/LifeStyle"
import Culture from "../Pages/Culture"
import Education from "../Pages/Education"
import Home from "../Pages/Home"


function NavRoutes() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/entertainment" element={<Entertainment/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/travel" element={<Travel/>}/>
        <Route path="/lifestyle" element={<LifeStyle/>}/>
        <Route path="/culture" element={<Culture/>}/>

        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavRoutes;
