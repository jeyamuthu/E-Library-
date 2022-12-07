//import { ConstructionRounded } from '@mui/icons-material'
import React, { Component } from 'react'
import EnComponent from './Hoc'
 class Counter extends Component {

  render() {
    const{name,inc,count}=this.props
return (
      <div>
      {
        name
      }
      <button onClick={inc}>Click{count}</button>
      </div>
    )
  }

}
export default EnComponent(Counter);