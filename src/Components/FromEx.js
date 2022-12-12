//import { Password } from '@mui/icons-material';
import React, { useState } from 'react'
//import { json } from 'react-router-dom';

export default function FromEx() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState(false);
    const formhandler=(e)=>{
      e.preventDefault();
    if(username.length==0 || password.length==0)
    {
      setError(true);
    }
    if(username && password)
    {
      const logObj = {
        name:username,
        pwd:password
    }
    
    console.log(logObj)
    console.log(JSON.stringify(logObj))
    alert(JSON.stringify(logObj))
    
  }
    }
    return (
    <div>
    <h1>Login page</h1>
    <form onSubmit={formhandler}>
    Username : <input type='text' placeholder=' Enter user name' value={username}
    onChange={(e)=>setUsername(e.target.value)}/>
    <div>
    {error && username.length==0?
    <lable style={{color:'red'}}>
    Username is required</lable>:""}
    </div>
    Password : <input type='password' placeholder=' Password'
    value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <div>
    {error && password.length==0?
    <lable style={{color:'red'}}>
    Password is required</lable>:""}
    </div>
    <button type='submit'>Login</button>
    </form>
    </div>
  )
}
