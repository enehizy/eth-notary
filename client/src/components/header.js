import React,{useContext} from 'react';
import {WalletContext} from '../store/WalletProvider';
import connectToWallet from '../connectToWeb3';
import {Link,useHistory,NavLink} from 'react-router-dom';

function ConnectToWallet({dispatch}){
 
  return(
    <button className="connect-to-metamask-top" onClick={async()=>{
      connectToWallet(dispatch);
   }}>Connect To Wallet</button>
  )
}
const Header=()=>{
    const location=useHistory();
    const {selectedAccount,dispatch} =useContext(WalletContext);
    return(
        <header>
        <div>
         <h2>Eth Notary</h2>
         <p>Decentralized Notary Service</p>
        </div>
         <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active-link" className="link">Home</NavLink></li>
          <li><NavLink exact to="/document/hash" activeClassName="active-link" className="link">Create hash</NavLink></li>
          <li><NavLink exact to="/document/notorize" activeClassName="active-link" className="link">Notorize</NavLink></li>
          <li><NavLink exact to="/document/verify" activeClassName="active-link" className="link">Verify</NavLink></li>
        </ul>
       </nav>
     
       {window.ethereum?window.ethereum.isConnected() &&selectedAccount?<p className="address">{selectedAccount?selectedAccount.substring(0,10) + ' ...':'loading acoounts..'}</p>:<ConnectToWallet dispatch={dispatch}/>:<ConnectToWallet dispatch={dispatch}/>}

       </header>
    )
}
export default Header;