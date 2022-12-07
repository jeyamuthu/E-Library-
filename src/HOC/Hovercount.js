import React, { Component } from 'react'
import EnComponent from './Hoc'
 class Hovercount extends Component {
   render() {
     const{name,inc,count}=this.props
     return (
       <div>
      {name}
      <h1 onMouseEnter={inc}>click{count}</h1>
      </div>
    )
  }

}
export default EnComponent(Hovercount)
