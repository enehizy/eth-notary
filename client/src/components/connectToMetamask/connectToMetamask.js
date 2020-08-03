import React,{useContext,useEffect} from 'react';
import connectWeb3 from './connectWeb3';
// import getNotaryContract from '../../getNotaryContract';
// import getWeb3 from '../../getWeb3';
import web3Context from '../../web3Context';
const ConnectToMetamask=({setConnected})=>{
   const {web3,setWeb3,accounts,setAccounts,notaryContract,setNotaryContract,setBalance} = useContext(web3Context);
    useEffect(()=>{
        (async function(){
        //  const web3=await getWeb3();
        //  const accounts=await web3.eth.getAccounts();
        //  const balance=await web3.eth.getBalance(accounts[0]);
        //  const networkId = await web3.eth.net.getId();
        //  const notaryContract=getNotaryContract(web3,networkId);
        //  return {web3,accounts,balance,notaryContract};
        })()
       },[])
       useEffect(()=>{
           if(web3 && accounts && notaryContract){
               setConnected(true);
           }
       },[web3])
    return(
        <button className="connect-to-metamask" onClick={async ()=>{ connectWeb3({setAccounts,setNotaryContract,setBalance,setWeb3})}}>Connect To Metamask</button>
    )
}
export default ConnectToMetamask;