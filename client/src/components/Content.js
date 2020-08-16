import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './home';
import Notorize from './notorize/notorize';
import Hash from './hash/hash';
import Verify from './verify/verify';
import NotFound from './notfound';



export default function Content(){
    return(
        <div className="content"> 
        <Switch>
           <Route exact path="/" component={Home}/>
           <Route path="/document/notorize" component={Notorize}/>
           <Route path="/document/hash" component={Hash}/>
           <Route path="/document/verify" component={Verify}/>
           <Route path="*" component={NotFound}/>
        </Switch> 
        </div>
    )
}