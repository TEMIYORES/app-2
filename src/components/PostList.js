import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errMsg:""
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({posts:res.data})           
        })
        .catch(err => {
        this.setState({errMsg: 'Error receiving data'})})
    }
    render() {
        const {posts,errMsg} = this.state
        return (
          <>
          
            { posts.length ?
                posts.map((post) => (
              <div key={post.id}>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
              </div>
            )) : null}
            {
                errMsg.length ? <div>{errMsg}</div> : null
            }
          </>
        );
    }
}

export default PostList
