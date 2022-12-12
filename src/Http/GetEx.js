import React, { Component } from 'react'
import axios from 'axios';
import './GetEx.css';
export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
   componentDidMount(){
        axios.get("data.json")
        .then((res)=>{
          console.log(res)
            this.setState({posts:res.data})
        })
    }
  render() {
    const{posts}=this.state
    return (
      <div>
      <h1>List of posts</h1>
      <table>
      <tr>
      <th >ID</th>
      <th>TITLE</th>
      <th>USER_ID</th>
      </tr>
      {posts.map((post)=>
        <tr>
        <td>{post.name}</td>
        </tr>
        )}
      </table>
    </div>
    )
  }
}
