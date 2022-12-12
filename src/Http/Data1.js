
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Data() {
    const[company,setCompany]=useState([])
    useEffect(()=>{
        axios.get("data.json")
        .then(e=>{
            setCompany(e.data)
           
        })
    })
    
  return (
 <div>
    <table>
    <tr>
    <th>IDD</th>
    <th>NAME</th>
    <th>DEGREE</th>
    <th>BRANCH</th>
    </tr>
    {company.map=((post)=>
    <tr>
        <td>{post.user_id}</td>
        <td>{post.name}</td>
        <td>{post.degree}</td>
        <td>{post.branch}</td>
        </tr>
        )}
    </table>
    </div>
  )
}
