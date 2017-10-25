import React, { Component } from 'react'
import { Link } from 'react-router'

class Wrapper extends Component {
    constructor() {
        super()
        this.state = {
            initDone: true
        }
    }

    componentDidMount() {
        var that = this
        // setTimeout(function () {
        //     that.setState({
        //         initDone: true
        //     })
        // }, 1000)
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.initDone ? this.props.children : <div>加载中...</div>}
                </div>
            </div>
        )
    }
}

export default Wrapper