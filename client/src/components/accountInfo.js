import React,{useContext}from 'react';
import Web3Context from '../web3Context';
const AccountInfo=()=>{
    const {accounts,balance} =useContext(Web3Context);
    return(
        <ul className="account-info">
            <li>{accounts?`${accounts[0]}`.substring(7,-1) +'.....  ':null}</li>|
            <li>{balance?` ${balance} ETH`:null}</li>
        </ul>

    )
}

export default AccountInfo;