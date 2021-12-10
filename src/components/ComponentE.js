import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

export class ComponentE extends Component {
    static contextType  = UserContext
    render() {
        return (
            <div>
            <h2>This is {this.context}</h2>
                <ComponentF/>
            </div>
        )
    }
}

export default ComponentE
