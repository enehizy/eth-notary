import React,{useContext} from  'react';
import UploadButton from '.././uploadButton';
import Web3Context from '../../web3Context';
import HashDoc from './hashDoc';
const Hash=()=>{
 

    return(
        <div className="hash document">
           <form>
            <UploadButton/>
            <div className="button-flex-end">
            <button>Create unique id fro document</button>
            </div>
          
           </form>
         
       
        </div>
    )
}
export default Hash;