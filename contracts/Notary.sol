pragma solidity ^0.6.6;


struct FILE_ENTRY{
   string description;
   uint timestamp;
   address owner;
   uint number;
}

contract Notary{
    mapping(bytes32 => FILE_ENTRY) file;
    mapping(bytes32 => bool) public fileExists;

    function addFile(string memory _filedata,string memory _desc) public
    
     {
     
      bytes32 id=getFileHash(_filedata);
      // require(fileExists[id] == false,'File already exists');
      // if(fileExists[id] == true){
      //    revert('file already exists');
      // }else{
      //    file[id]=FILE_ENTRY({description:_desc,timestamp:now,owner:msg.sender});
      //    fileExists[id]=true;
      // 
     if(fileExists[id] == true){revert('File already exists');}
      FILE_ENTRY memory entry=FILE_ENTRY({
        description:_desc,
        timestamp:now,
        owner:msg.sender,
        number:block.number
        });
      file[id]=entry;
      fileExists[id]=true;
     
    
    }

    function checkFile(bytes32 _hash) public view
    returns(address _owner,string memory  _desc,uint  _timestamp,uint _number)
    {
      //  if(fileExists[_hash] == true){
      //   _owner=file[_hash].owner;
      //   _desc=file[_hash].description;
      //   _timestamp=file[_hash].timestamp;

      //  }
      // require(fileExists[_hash],'file does not exist');
       if(fileExists[_hash] != true){revert('file does not exist');}
        _owner=file[_hash].owner;
        _desc=file[_hash].description;
        _timestamp=file[_hash].timestamp;
        _number=file[_hash].number;
    }

    function getFileHash(string memory _data) public  pure
    returns(bytes32)
    {
     return keccak256(bytes(_data));
    }
 
}