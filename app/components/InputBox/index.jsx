import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

class Input extends Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <input type="text" placeholder="请输入关键字"
                value={this.state.value}
                onKeyUp={this.handleKeyup.bind(this)} 
                onChange={this.handleChange.bind(this)} />
        )
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleKeyup(e) {
        let value = e.target.value
        if (e.keyCode == 13 && value.trim()) {
            this.props.onSearch(value)
        }
    }
}

export default Input