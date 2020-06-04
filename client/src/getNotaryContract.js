
import Notary from './contracts/Notary.json';
const getNotaryContract=(web3,networkId)=>{
        const deployedNetwork = Notary.networks[networkId];
        const notaryContract =new web3.eth.Contract(
         Notary.abi,
         deployedNetwork && deployedNetwork.address,
       );
       return notaryContract;
      
}
export default getNotaryContract;