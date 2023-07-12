import React from "react";
import "../styles/home.css";
import icon from "../assets/images/download (1).png"
import icon2 from "../assets/images/download (2).png"
import {BsLightning} from "react-icons/bs"
const Home = () => {
  return (
    <div className="container">
      <div className="main-data">
        <div className="from-box">
          <div className="box">
            <img src={icon} alt="" />
             <h2>Gnosis token</h2>
               
 
          </div>
          <div class="rectangle"></div>
        </div>

        {/* centerdiv */}
        <div className="center">
        <div class="trapezoid"></div>
        <div class="trapezoid"></div>
        </div>
         {/* end div */}
        <div className="to-box">
          <p>To</p>
          <h2>Gnosis Chain</h2>
          <div className="box">
            <img src={icon2} alt="" />
            <h2>Gnosis Token on GC</h2>
            <p>0.0</p>
          </div>
        </div>

      </div>

      <div className="center-data">
           <p>Alternative Adress</p>
           <p>Limits</p>
           <BsLightning size={20}/>
      </div>


    
    </div>



  );
};

export default Home;
