import React,{useEffect,useState,useContext} from 'react';
import {WalletContext} from './store/WalletProvider';
import Content from './components/Content';
import getWeb3 from './getWeb3';
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';
import Notary from './contracts/Notary.json';
import './App.css';




const App=()=>{
  const {selectedAccount,selectedNetwork} =useContext(WalletContext);
  useEffect(()=>{
    // window.ethereum.enable();
    // window.ethereum.autoRefreshOnNetworkChange= false;
  })
  return(
    
    <div>
     
        <Header/>
        <Content/>
     {selectedNetwork}
       {/* {window.ethereum.isConnected()?null:<Footer/>} */}
       {window.ethereum?window.ethereum.isConnected() && selectedAccount?null:<Footer/>:<Footer/>}
      
    
    </div>
   
  )
}

export default App;
