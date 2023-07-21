import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.9abef1d7.svg";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import "./header.css";

import DiologBox from "../DiologBox/DiologBox";

const Header = () => {
  const navRef = useRef();


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };




  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <h2>OmniBridge</h2>
      </div>

      <div className="btn" ref={navRef}>
        <button onClick={openDialog}>Connect Wallet</button>

        <div class="select-section">
        <div>
        <BsGlobe className="custom-arrow" size={18}/>
        </div>
        <select>
            <option value="ETH">ETH{"<=>"}GC</option>
            <option value="GC">BSC{"<=>"}GC</option>
        </select>
       </div>

        <FaTimes
          size={20}
          onClick={showNavbar}
          className="nav-btn nav-close-btn cur"
        />
      </div>

      {isOpen && (
        <DiologBox
          onClose={closeDialog}
        />
      )}

      <AiOutlineMenu size={20} onClick={showNavbar} className="nav-btn cur" />
    </header>
  );
};

export default Header;
