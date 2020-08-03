import React,{useState,useContext} from 'react';
import Web3Context from '../../web3Context';
import UploadButton from '../uploadButton';
import VerifyDoc from './verifyDoc';
const Verify=()=>{
    const {web3,accounts,notaryContract}=useContext(Web3Context);
    const [hashValue,setHash]=useState('');
    return(
        <div className="verify document">
          <form>
            <UploadButton/>
            <div className="button-flex-end">
            <button>Verify document content</button>
            </div>
          
           </form>
         
       
        </div>
    )
}

export default Verify;