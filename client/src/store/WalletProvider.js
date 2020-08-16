import React,{useEffect,useReducer} from 'react';
import getWeb3 from '../getWeb3';
export const WalletContext=React.createContext(undefined);


const walletState={
  selectedAccount:null,
  selectedNetwork:null
}
const walletReducer=(state,action)=>{
  if(action.type == "accountChanged"){
    return {...state,
      selectedAccount:action.payload
    }
  }
  if(action.type == 'networkChanged'){
    return {
      ...state,
      selectedNetwork:action.payload

    }
  }
  return state;
}
export default function WalletProvider({children}){
    const [state,dispatch]= useReducer(walletReducer,walletState);
    const {selectedAccount,selectedNetwork}=state;
    useEffect(()=>{
        (async function(){
          const {ethereum}=window;
          if(ethereum){
             if(ethereum.isConnected()){
              ethereum.on('accountsChanged',async(accounts)=>{
                dispatch({type:'accountChanged',payload:accounts[0]})
               })
               ethereum.on('chainChanged',(networkId)=>{
                dispatch({type:'networkChanged',payload:networkId})
               })
              // const web3=await getWeb3();
              // const accounts=await web3.eth.getAccounts()
              // const networkId=await web3.eth.net.getId()
              // dispatch({type:'accountChanged',payload:accounts[0]});
              // dispatch({type:'networkChanged',payload:networkId});

             
             }
          }
      

      //  })
        })()
    },[])
    return(
        <WalletContext.Provider value={{selectedAccount,selectedNetwork,dispatch}}>
           {children}
        </WalletContext.Provider>
    )
}