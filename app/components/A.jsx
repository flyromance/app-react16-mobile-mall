import React, { Component } from 'react'

class A extends Component {
    render() {
        return (
            <p>{this.props.userinfo.userid}</p>
        )
    }
}

export default A