import React,{useEffect,useState,useContext} from 'react';
import Web3Context from '../../web3Context';
import VerifyDoc from './verifyDoc';
const Verify=()=>{
    const {web3,accounts,notaryContract}=useContext(Web3Context);
    const [hashValue,setHash]=useState('');
    return(
        <div className="verify document">
            <h2>Insert unique id of the Document</h2>
            <input type="text" placeholder="insert hash here" value={hashValue} onChange={(e)=>{setHash(e.target.value)}}/>
            <button onClick={()=>{VerifyDoc({hashValue,web3,accounts,notaryContract})}}>Verify Document</button> 
        </div>
    )
}

export default Verify;