import React,{useEffect, useState} from 'react'

 function HookEx() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
      document.title="jeyam";
      //setCount(count)
    console.log({count})
  })
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={ ()=>{
        setCount(count+1)
    }}>clickMe</button>
    <br/>
    <br/>
     <button onClick={ ()=>{
        setCount(count+5)
    }}>clickMe</button>
    <br/>
    <br/>
     <button onClick={ ()=>{
        setCount(count-1)
    }}>clickMe</button></div>

  )
}
export default HookEx;