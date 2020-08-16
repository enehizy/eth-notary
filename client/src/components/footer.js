import React,{useContext} from 'react';
import ConnectToWallet from '../connectToWeb3';
import {WalletContext} from '../store/WalletProvider';
import connectToWallet from '../connectToWeb3';


export default function Footer(){
    const {dispatch}=useContext(WalletContext);
    return (
        <footer>
        <h3>To acccess our blockchain features you need to connect to a wallet .If you dont have one  <a target="blank">Install metamask wallet</a> Or</h3>
        <button className="connect-to-metamask-bottom"  onClick={async()=>{
        ConnectToWallet(dispatch)
        }}>Connect to my Wallet</button>
        </footer>
    )
}