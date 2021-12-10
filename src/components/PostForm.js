import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             body: '',
             userId: ''
        }
    }

    changeHandler = (e) =>{
        this.setState({ [e.target.name] : e.target.value})
    }
    sumbitHandler = (e) => {
        e.preventDefault();
  console.log(this.state);
      axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        
    }
    render() {
        const {title,body,userId} = this.state
        return (
          <form>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
            <br />
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
            <br />
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
            <br />
            <button type="submit" onClick={this.sumbitHandler}>
              Submit
            </button>
          </form>
        );
    }
}

export default PostForm
