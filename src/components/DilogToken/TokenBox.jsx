import React, { useState } from "react";
import "./Token.css";
import { FaTimes } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai"
import coin1 from "../../assets/images/1027.png"

import CustomDiolog from "../CustomDilog/Diolog"

import {dataArray} from "../../assets/data/Data"

const TokenBox = ({ showDialog, handleCloseDialog }) => {

   const [showDilogbox,setShowDialogbox]=useState(false)

   const OpenDialog =()=>{
      setShowDialogbox(true)
   }

   const CloseDialog =()=>{
      setShowDialogbox(false)
   }


   console.log(dataArray)



  return (
    <div className={`dialog-overlay ${showDialog ? "show" : ""}`}>

      <div className="dialog-content">
      <FaTimes className="cur" size={18} onClick={handleCloseDialog} />
        <div className="dialog-section">
            <div className="serch-section">
            <div className="search">
            <h1>Select a Token</h1>
            <p>Search Name Or Paste Token</p>
          </div>

          <div className="add-section">
            <AiOutlinePlus size={18}/>
             <p onClick={OpenDialog} className="cur">Add Custom Token</p>

          </div>

            </div>
        </div>

        <div className="search-box">
        <input type="text" placeholder="Search" />
        </div>

        {/* scrolsection */}

        {
         dataArray.map((data)=>(

            <div key={data.id} className="coin-section">  
            <div className="left">
               <img src={data.img} alt="" />
            </div>
            <div className="right">
               <h1>{data.first}</h1>
               <h3>{data.last}</h3>
            </div>
           </div>

         ))

        }

      </div>


      <CustomDiolog showDilogbox={showDilogbox} CloseDialog={CloseDialog} />




    </div>

   
  );
};

export default TokenBox;
