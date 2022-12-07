import React, { useState } from 'react'
//import { json } from 'react-router-dom';

export default function FromEx() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const formhandler=(event)=>{
        event.preventDefault();
      const logObj = {
        name:username,
        pwd:password
    }
    console.log(logObj)
    console.log(JSON.stringify(logObj))
    }
  return (
    <div>
    <h1>Login page</h1>
    <form onSubmit={formhandler}>
    Username : <input type='text' placeholder='enter user name' value={username}
    onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
    Password : <input type='password' placeholder='password'
    value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
    <button type='submit'>Login</button>
    </form>
    </div>
  )
}
