const NotorizeDoc=async (e,{file,web3,notaryContract,desc,account})=>{
  e.preventDefault();
  
  //  console.log(file);
   const fileToText=await file.text();
 
   if(file != null && web3 != null && notaryContract != null && desc.length >= 1){
   try{
    const result=await notaryContract.methods.addFile(fileToText,desc).send({from:account,gas:2100000});
    console.log(result);
   }
   catch(e){
     console.log(e.message);
   }
   }
  }
    export default NotorizeDoc;