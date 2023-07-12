import React from 'react'
import logo from "../assets/images/logo.9abef1d7.svg"
import {BsGlobe} from "react-icons/bs"
import "../styles/header.css"
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
         <img src={logo} alt="" />
         <h2>OmniBridge</h2>
      </div>

      <div className="btn">
        <button>Connect Wallet</button>
        <div className="globe-drop">
           <BsGlobe size={18}  />
            
            <p>ETH {'=>'}GC</p>
            
        </div>
      </div>
    
  
  </header>
  )
}

export default Header
