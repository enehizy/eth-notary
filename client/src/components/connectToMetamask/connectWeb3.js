
import getNotaryContract from '../../getNotaryContract';
import getWeb3 from '../../getWeb3';
const connectWeb3=async ({setWeb3,setAccounts,setNotaryContract,setBalance})=>{
    try{
        
        const web3=await getWeb3();
        const accounts=await web3.eth.getAccounts();
        const balance=await web3.eth.getBalance(accounts[0]);
        const networkId = await web3.eth.net.getId();
        const notaryContract=getNotaryContract(web3,networkId);
       setWeb3(web3);
       setAccounts(accounts);
       setNotaryContract(notaryContract);
      setBalance(web3.utils.fromWei(balance,'ether'));
    }
    catch(e){
        alert(e);
    }
    
}
export default connectWeb3;