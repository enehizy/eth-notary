import React from 'react';
import {Link,useHistory} from 'react-router-dom';
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
          <li onClick={()=>{location.push('/')}}>Home</li>
          <li onClick={()=>{location.push('/document/hash')}}>Create hash</li>
          <li onClick={()=>{location.push('/document/notorize')}}>Notorize</li>
          <li onClick={()=>{location.push('/document/verify')}}>Verify</li>
        </ul>
       </nav>
       </header>
    )
}
export default Header;