import React, { useState } from 'react';
import "./Token.css"
import {FaTimes} from "react-icons/fa"
const TokenBox = ({ showDialog, handleCloseDialog }) => {

      
  return (
    <div className={`dialog-overlay ${showDialog ? 'show' : ''}`}>
          <FaTimes size={18} className="close-btn" onClick={handleCloseDialog} />
    <div className="dialog-content">
       <div className="dialog-section">
            <div className="search">
               <h2>Select a Token</h2>
               <p>Search Name Or Paste Token</p>
               <input type="text" placeholder='Search' />
            </div>
            <div className="add-token">
               <p>add custom Token</p>
            </div>

       </div>

    </div>
  </div>
  );
}

export default TokenBox;
