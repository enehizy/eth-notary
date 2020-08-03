import React,{useContext,useState} from 'react';
import web3Context from '../web3Context';
import ConnectToMetamask from './connectToMetamask/connectToMetamask';
import AccountInfo from './accountInfo';
const Nav=()=>{
    const [connected,setConnected]=useState(false);
    return(
     <div className="second_nav">
       {!connected?<ConnectToMetamask setConnected={setConnected}/>:<AccountInfo/>}
    </div>
    )
}
export default Nav;