import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Data() {
  const[post,setpost]=useState([]);
  useEffect(()=>
  {
    axios.get("data.json")
      .then(e=>{
        setpost(e.data)
      })
  })
  return (
    <div>
    GetEx
    <table classname="table"> 
    <tr>
    <th>ID</th>
    <th>name</th>
    <th>User id</th>
    </tr>
    {post.map((pos)=> 
      <tr>
      <td>{pos.user_id}</td>
      <td>{pos.name}</td>
      <td>{pos.degree}</td>
      </tr>
      )}
      </table>
      </div>
    
  )
}

export default Data