const verifyDoc=async ({hashValue,web3,accounts,notaryContract})=>{
    if(hashValue && web3 && notaryContract && accounts){
    try{
        const result=await notaryContract.methods.checkFile(hashValue).call();
        console.log(result);
    }
    catch(e){
        console.log(e.message.message);
    }
    }
    }

    export default verifyDoc;