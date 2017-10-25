import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'


import Input from '../InputBox'
import './style.less'

class Header extends Component {
    constructor() {
        super()
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    handleClick() {
        hashHistory.push('/home')
    }

    toUser() {
        hashHistory.push('/user')
    }

    handleSearch(val) {
        hashHistory.push(`/search/all/${val}`)
    }

    render() {
        return (
            <div className="header clearfix">
                <div className="fl back-icon" onClick={this.handleClick.bind(this)} >
                    <span className="iconfont icon-return"></span>
                </div>
                <div className="search-box clearfix">
                    <span className="search-btn fr"><i className="iconfont icon-search"></i></span>
                    <div className="input-box">
                        <Input onSearch={this.handleSearch.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header