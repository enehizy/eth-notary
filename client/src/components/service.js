import React from 'react';
import {Link} from 'react-router-dom';

const Service=({title,description,logo,service})=>{
    return(
        <div className="service">
           <img src={logo} className="file_icon"/>
          <h3>{title}</h3>
          <p>
              {description}
          </p>
          <Link to={`/document/${service}`}> 
          <button>
           Click here
          </button>
          </Link>
        </div>
    )
}
export default Service;