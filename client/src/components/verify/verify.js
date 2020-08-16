import React,{useState,useContext} from 'react';
import Web3Context from '../../web3Context';
import UploadButton from '../uploadButton';
import VerifyDoc from './verifyDoc';
const Verify=()=>{
  
    return(
        <div className="verify document">
          <form>
            <UploadButton/>
            <div className="button-flex-end">
            <button>Verify document</button>
            </div>
          
           </form>
         
       
        </div>
    )
}

export default Verify;