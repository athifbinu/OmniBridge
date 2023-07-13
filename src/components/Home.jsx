import React from "react";
import "../styles/home.css";
import icon from "../assets/images/download (1).png"
import icon2 from "../assets/images/download (2).png"
import {BsLightning} from "react-icons/bs"
import {AiOutlineGithub,AiOutlineTwitter} from "react-icons/ai"
import {BiLogoTelegram} from "react-icons/bi"
const Home = () => {
  return (
    <>
    <div className="mane">
       <div className='container'>
      <div className='left-side'>
        <div className='square1'>
           <div className="squre-data">
               <img src={icon} alt="" />
               <h2>Gnosis Tocken</h2>
           </div>
        </div>
        <div className="triangle1"></div>
      </div>

      <div className='center'>
        <h1 className='icon'></h1>
        <div className='center-section'>
          <div className='top-sec'>
      
          </div>
          <div className='bottom-sec'>
          </div>
    
        </div>
      </div>

      <div className='right-side'>
        <div className="triangle2">
        </div>
        <div className='square2'>
        <div className="squre-data">
               <img src={icon2} alt="" />
               <h2>Gnosis Tocken</h2>
           </div>
        </div>
      </div>

    </div>

    <div className="end-data">
         <p>Alternative adress</p>
         <br />
          <div className="flex" style={{justifyContent:"center"}} >
          <BsLightning/>
         <p>Limits</p>
          </div>
    </div>

      

    </div>

      <div className="footer-section">
          <div className="footer-icon">
              <BsLightning size={20}/>
          </div>

          <div className="footer-secocial">
                   <AiOutlineGithub size={20}/>
                  <AiOutlineTwitter size={20}/>
                  <BiLogoTelegram size={20}/>
          </div>
      </div>
    </>

  );
};

export default Home;
