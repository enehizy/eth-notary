import React,{useState,useRef} from 'react';


function getFile(e,setFile){
      console.log(e.target.value);
      setFile(e.target.value)
}



export default function UploadButton(){
   const [file,setFile]=useState('');
   const [defualt,setDefault]=useState('No file chosen');

  
 
    return(
          <div className="flex-center upload-button-container">
                 <h4>{file == ''?defualt:'Selected File: ' +file.slice(12)}</h4>
                <label className="select-file" htmlFor="upload" >Click to select a file,Your files content will not be uploaded or seen by us</label >
               

                 <input name="upload "type="file" value="upload"  value={file} id="upload" onChange={(e)=>{getFile(e,setFile)}} />
          </div>
     
        
    )
}
// onChange={(e)=>{setFile(e.target.value);}}
