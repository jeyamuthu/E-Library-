import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Valid extends Component {
  render() {
    return (
   <h1>Hello,{this.props.name},
   {this.props.name}</h1>
    )
  }
 /*Valid.PropTypes={
    name:PropTypes.string,
    id:PropTypes.number.toRequired,
  }
  Valid.defaultProps={
    name:"sai",
    id=1,
  }*/
}
