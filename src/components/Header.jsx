import React, { useRef } from "react";
import logo from "../assets/images/logo.9abef1d7.svg";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import "../styles/header.css";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <h2>OmniBridge</h2>
      </div>

      <div className="btn" ref={navRef}>
        <button>Connect Wallet</button>
        <div className="globe-drop">
          <BsGlobe size={18} />
          <p>ETH {"=>"}GC</p>
        </div>
        <FaTimes
          size={20}
          onClick={showNavbar}
          className="nav-btn nav-close-btn"
        />
      </div>

      <AiOutlineMenu size={20} onClick={showNavbar} className="nav-btn" />
    </header>
  );
};

export default Header;
