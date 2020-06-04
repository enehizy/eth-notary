import React,{useEffect,useContext} from  'react';
import UploadButton from '.././uploadButton';
import Web3Context from '../../web3Context';
import HashDoc from './hashDoc';
const Hash=()=>{
  const {web3,accounts,notaryContract}=useContext(Web3Context);
    useEffect(()=>{
      (async function(){
        console.log(web3);
        console.log(accounts);
        console.log(notaryContract);
         })()
  },[])
    return(
        <div className="hash document">
      
        <form onSubmit={(e)=>{HashDoc({e,web3,accounts,notaryContract})}}>
       <UploadButton/>
       <button>Create Hash</button>
       </form>
        </div>
    )
}
export default Hash;