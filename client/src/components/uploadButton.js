import React,{useState} from 'react';

const UploadButton=({getFile})=>{
    const [file,setFile]=useState("");
    return(
    
          <input name="upload "type="file" value="upload" value={file} id="upload"  onChange={(e)=>{setFile(e.target.value);}}/>
    )
}
export default UploadButton;