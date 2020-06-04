const HashDoc=async ({e,web3,accounts,notaryContract})=>{
    e.preventDefault();
    const file=e.target.upload.files[0];
    if(file != 'undefined' && web3 && accounts && notaryContract){
      try{
       
       const result = await notaryContract.methods.getFileHash(file).call();
       console.log(result);
      }
     catch(e){
       console.log(e);
     }
    }
    
    }
    export default HashDoc;