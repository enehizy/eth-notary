import React,{useState,useContext} from 'react';
import Web3Context from '../../web3Context';
import UploadButton from '.././uploadButton';
import NotorizeDoc from './notorizeDoc';

const Notorize=()=>{
     const {web3,accounts,notaryContract}=useContext(Web3Context);
     const [desc,setDesc]=useState('');

    
    return(
        <div className="notorize document">
        
          <form>
             <UploadButton/>
             <textarea placeholder="give a decription or summary of the file">
             </textarea> 
             <div className="button-flex-end">
             <button>Notorize document</button>
             </div>
          </form>
        </div>
    )
}

export default Notorize;