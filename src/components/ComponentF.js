import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
               {
                   username =>{
                       return <h3>{username}</h3>
                   }
               }
            </UserConsumer>
        )
    }
}

export default ComponentF
