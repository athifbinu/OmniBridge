import React from 'react'
import { FaTimes } from "react-icons/fa";
import Banner from "../../assets/images/banner.svg"
import "./Dialog.css"
const Diolog = ({ showDilogbox, CloseDialog }) => {


  return (
    <div className={`dialog-overlay ${showDilogbox ? "show" : ""}`}>
    <FaTimes size={18} className="close-btn" onClick={CloseDialog} />
    <div className="dialog-content">
     <div className="token-section">
         <div className="token-dta">
            <h1>Add Custom Token</h1>
            <img  src={Banner} alt="" />
            
            <h2>Token Contract Adress</h2>
            <input type="text" placeholder='0xAbc...' />

            <h2>Token Symbol</h2>
            <input type="text" placeholder='ETH' />

            <h2>Decimals of Precision</h2>
            <input type="text" placeholder='18' />

             <div className="token-btn">
               <button onClick={CloseDialog} className='back-btn'>Back</button>
               <button className='add-btn'>add Token</button>
             </div>
            
         </div>

     </div>
    </div>
  </div>


  )
}

export default Diolog
