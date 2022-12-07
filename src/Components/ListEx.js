import React from 'react'

export default function ListEx() {
 const cars=[
    {model:"Nano",id:1},
    {model:"800",id:2},
    {model:"Breeze",id:3}
 ];
 return(
    <h1>{cars.map((val)=><li key={val.id}>{val.model}</li>)}
</h1>
 )
}
