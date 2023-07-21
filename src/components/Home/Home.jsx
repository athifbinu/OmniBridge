import React, { useState } from "react";
import "./home.css";
import icon from "../../assets/images/download (1).png";
import icon2 from "../../assets/images/download (2).png";
import { BsLightning, BsArrowLeftRight } from "react-icons/bs";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLock,
  AiOutlineArrowRight,
  AiOutlineClose,
} from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import {RiArrowDropDownLine} from "react-icons/ri"
import TokenBox from "../DilogToken/TokenBox";



const Home = () => {
 
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [arrowClicked,setArrowClicked] = useState(false);
  


  const handleAddSomethingClick = () => {
    setShowInput(true);
  };

  const handleInputCloseClick = () => {
    setShowInput(false);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const [showDialog, setShowDialog] = useState(false);

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


 

  return (
    <>
      <div className="mane">
        <div className="container-data">
          <div className="ln">
            <p>From</p>
            <h1>ETH Mainnet</h1>
          </div>
          <BsArrowLeftRight
            size={20}
            className="icon-d cur"
             onClick={()=>setArrowClicked(!arrowClicked)}
          />
          <div className="To">
            <p>To</p>
            <h1>Gnois Token On Gc</h1>
          </div>
        </div>


        <div className="container">
          <div className="left-side">
            <div className="square1">
              <div className="squre-data">
                {arrowClicked ? (
                  <>
                    <img src={icon2}  alt="" />
                    <h2>Gnosis Tocken</h2>
                  </>
                ) : (
                  <>
                    <img src={icon}  alt="" />
                    <h2>Gnosis Tocken </h2>
                     <RiArrowDropDownLine size={30} className="cur" onClick={handleOpenDialog}/>
                  </>
                  )}


               
              </div>
              <div className="squre-num">
                <p>0.0</p>
                <button>Max</button>
              </div>
            </div>
            <div className="triangle1"></div>
          </div>

          <div className="center">
            <BsArrowLeftRight size={20} className="icon cur" 
               onClick={()=>setArrowClicked(!arrowClicked)}
            />
            <div className="center-section">
              <div className="top-sec">
                <div className="top-sec-data">
                  <h2>Unlocked</h2>
                  <AiFillLock size={18} />
                </div>
              </div>
              <div className="bottom-sec"></div>

              <div className="bottom-sec-data">
                <h2 className="mt">Transfer</h2>
                <AiOutlineArrowRight size={18} className="mt" />
              </div>
            </div>
          </div>

          <div className="right-mobile">
            <p>To</p>
            <h1>Gnois Token On Gc</h1>
          </div>
          <div className="right-side">
            <div className="triangle2"></div>
            <div className="square2">
              <div className="squre-data">
                {arrowClicked ? (
                  <>
                    <img src={icon} alt="" />
                    <h2>Gnosis Tocken</h2>
                    <RiArrowDropDownLine size={30} className="cur" onClick={handleOpenDialog}/>
                  </>
                ) : (
                  <>
                    <img src={icon2} alt="" />
                    <h2>Gnosis Tocken</h2>
                  </>
                )}
              </div>
              <h1>0.0</h1>
            </div>
          </div>
        </div>


        <div className="end-data">
          {showInput ? (
            <div>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Reciptinonist adress"
              />
              <AiOutlineClose className="close" size={18}  onClick={handleInputCloseClick} />
            </div>
          ) : (
            <p className="cur" onClick={handleAddSomethingClick}>  Alternative adress</p>
          )}
          <br />
          <div className="flex" style={{ justifyContent: "center" }}>
            <BsLightning />
            <p className="cur" onClick={toggleDropdown}>Limits</p>
          </div>
             
          {isOpen && (
        <div className="dropdown-content">
               <div className="dropdown-section">
                <div className="drop-left">
                <p>Daily Limit</p>
                 <p>Max per Tx</p>
                 <p>Min Per TX</p>
                </div>
                <div className="drop-right">
                <p>{"@@"}</p>
                <p>1 GB GNO</p>
                <p>0.000000000001 GNO</p>
                </div>

               </div>
        </div>
         )}

        </div>

   
      </div>

      <div className="footer-section">
        <div className="footer-icon">
          <BsLightning size={20} />
        </div>

        <div className="footer-secocial">
          <AiOutlineGithub size={20} />
          <AiOutlineTwitter size={20} />
          <BiLogoTelegram size={20} />
        </div>
      </div>

      <TokenBox showDialog={showDialog} handleCloseDialog={handleCloseDialog} />
    




    </>

    
  );
};

export default Home;
