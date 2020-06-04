const verifyDoc=async ({hashValue,web3,accounts,notaryContract})=>{
    if(hashValue && web3 && notaryContract && accounts){
     const result=await notaryContract.methods.checkFile(hashValue).call();
     console.log(result);
    }
    }