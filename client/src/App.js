import React,{useEffect,useState} from 'react';
import {Route,Switch} from 'react-router-dom';
import getWeb3 from './getWeb3';
import Home from './components/home';
import Header from './components/header';
import Notorize from './components/notorize/notorize';
import Hash from './components/hash/hash';
import Verify from './components/verify/verify';
import NotFound from './components/notfound';
import Web3Context from './web3Context';
import getNotaryContract from './getNotaryContract';
import './App.css';


const App=()=>{
  const [web3,setWeb3]=useState(null);
  const [accounts,setAccounts]=useState(null);
  const [notaryContract,setNotaryContract]=useState(null);

  useEffect(()=>{
   (async function(){
    const web3=await getWeb3();
    const accounts=await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const notaryContract=getNotaryContract(web3,networkId);
    setWeb3(web3);
    setAccounts(accounts);
    setNotaryContract(notaryContract);
 
   })()
  },[])

  
  return(
    <Web3Context.Provider value={{web3,accounts,notaryContract}}>
    <div>
     <Header/>
     <div className="content"> 
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/document/notorize" component={Notorize}/>
        <Route path="/document/hash" component={Hash}/>
        <Route path="/document/verify" component={Verify}/>
        <Route path="*" component={NotFound}/>
     </Switch> 
     </div>
    </div>
    </Web3Context.Provider>
  )
}

export default App;
