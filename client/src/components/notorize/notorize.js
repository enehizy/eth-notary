import React,{useState,useEffect,useContext} from 'react';
import Web3Context from '../../web3Context';
import UploadButton from '.././uploadButton';
import NotorizeDoc from './notorizeDoc';

const Notorize=()=>{
     const {web3,accounts,notaryContract}=useContext(Web3Context);
     const [desc,setDesc]=useState('');
    useEffect(()=>{
      (async function(){
       console.log(web3);
       console.log(accounts);
       console.log(notaryContract);
         })()
  },[])
    return(
        <div className="notorize document">
           <form onSubmit={(e)=>{NotorizeDoc({e,desc,web3,notaryContract,accounts})}} encType="multipart/form-data">
          <textarea onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description of the file" value={desc}>
            
          
          </textarea>
          <p>* please give a good description as this cant be changed once notorize</p>
          <UploadButton/>
          <button type="submit">Notorize</button>
          </form>
        </div>
    )
}

export default Notorize;