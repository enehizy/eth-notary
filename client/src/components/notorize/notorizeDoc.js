const NotorizeDoc=async ({e,desc,web3,notaryContract,accounts})=>{
    e.preventDefault();
    const file=e.target.upload.files[0];
    
    if(desc && web3 && accounts && notaryContract && file != 'undefined'){
      try{
     
       const result = await notaryContract.methods.addFile(file,desc).send({from:accounts[0]});
       console.log(result);
      }
     catch(e){
       console.log(e);
     }
    }
    
    }
    export default NotorizeDoc;