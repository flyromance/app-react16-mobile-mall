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

    changeLocation() {
        hashHistory.push('/city')
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
                <div className="fl location" onClick={this.changeLocation.bind(this)}>
                    北京<span className="iconfont icon-unfold"></span>
                </div>
                <div className="user-icon fr" onClick={this.toUser.bind(this)}>
                    <i className="iconfont icon-people_fill"></i>
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