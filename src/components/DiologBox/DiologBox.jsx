import React from 'react';
import "./dilog.css"
import Wallet from "../../assets/images/wallet.svg"
import Token from "../../assets/images/imtoken.bd139121.svg"
import coinbse from "../../assets/images/coinbase.200710e6.svg"
const DiologBox = ({onClose }) => {

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('dialog-container')) {
      onClose();
    }
  };


  return (
    <div className="dialog-container" onClick={handleBackdropClick}>
    <div className="dialog-box">
      <div className="dialog-header">
          <div className="wallet hover">
                <img src={Wallet} alt="" />
                <h1>WalletConnect</h1>
                <p>Scan With WalletConnect To Connect</p>
          </div> 
          <div className="imToken hover">
               <img src={Token} alt="" />
               <h1>imToken</h1>
               <p>Connect To Your imToken Wallet</p>
          </div>
      </div>
      <div className="dialog-content hover">
          <img src={coinbse} alt="" />
          <h1>Coinbase</h1>
          <p>Scan With Coinbase Wallet to Connect</p>
      </div>
    </div>
  </div>
  );
}

export default DiologBox;
