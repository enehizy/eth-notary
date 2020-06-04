const Notary=artifacts.require('Notary');
const {readFileSync}=require('fs');
const file=readFileSync(__dirname+'/blockchain_use_cases.txt');
const hexFile=Buffer.from(file,'hex').toString();
contract('Notary',()=>{
    
    it('should return the same hash for the same the same data',async ()=>{
      const notary=await Notary.deployed();
      const hash1=await notary.getFileHash(hexFile);
      const hash2=await notary.getFileHash(hexFile);
      assert(hash1,hash2,'the hashes are not the same');
    })
    it('should check if file exists returns info',async()=>{
      const notary=await Notary.deployed();
      const hash=await notary.getFileHash(hexFile);
      const checkFile=await notary.checkFile(hash);
      assert(typeof checkFile,typeof [],'file hash not added');
    })

    it('should add a files hash to the blockchain',async ()=>{
    
      const notary=await Notary.deployed();
      await notary.addFile(hexFile,'description');
      const hash=await notary.getFileHash(hexFile);
      const fileExists=await notary.fileExists(hash);
      assert(fileExists,true,'file hash not added');
    

    })
    it('should check if file exist or not',async()=>{
      const notary=await Notary.deployed();
      const hash=await notary.getFileHash(hexFile);
      const fileExists=await notary.fileExists(hash);
      assert(typeof fileExists,typeof fileExists,'does not return a boolean true or false');
     })
})