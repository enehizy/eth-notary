import getWeb3 from './getWeb3';

export default async function ConnectToWallet(dispatch){
 const web3=await getWeb3();
 const accounts= await web3.eth.getAccounts();
 const networkid=await web3.eth.net.getId();
 dispatch({type:"accountChanged",payload:accounts[0]})
 dispatch({type:"networkChanged",payload:networkid})
}