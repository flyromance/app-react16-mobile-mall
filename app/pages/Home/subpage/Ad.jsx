import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeAd from '../../../components/HomeAd'
import { getAdData } from '../../../fetch/home'

class Ad extends Component {
    constructor() {
        super()
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        var result = getAdData()
        result.then(function (res) {
            return res.json()
        }).then(data => {
            this.setState({
                data: data
            })
        })
    }

    render() {
        return (
            <div className="box">
                <h2 className="box-title">超值特惠</h2>
                <HomeAd data={this.state.data} />
            </div>

        )
    }
}

export default Ad