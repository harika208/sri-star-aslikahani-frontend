import React from 'react';
import Logo from "./Images/Logo.jpg";
import "./Logo.css"

function LogoName() {
  return (
    <div>
      <img className="logo" src={Logo}/>
    </div>
  )
}
 export default LogoName;