import React,{useState,useRef} from 'react';


function getFile(e,setFile){
      console.log(e.target.value);
      setFile(e.target.value)
}



export default function UploadButton(){
   const [file,setFile]=useState('');
   
 
    return(
          <div className="flex-center upload-button-container">
              
                <label className="select-file" htmlFor="upload" >Click to select a file,Your files content will not be uploaded or seen by us</label >
               

                 <input name="upload "type="file" value="upload"  value={file} id="upload" onChange={(e)=>{getFile(e,setFile)}} />
          </div>
     
        
    )
}
// onChange={(e)=>{setFile(e.target.value);}}
