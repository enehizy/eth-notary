import React from 'react';
import {Link,useHistory,NavLink} from 'react-router-dom';
const Header=()=>{
    const location=useHistory();
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
       <button className="connect-to-metamask-button">Connect To Wallet</button>
       </header>
    )
}
export default Header;