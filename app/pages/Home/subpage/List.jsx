import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import List from '../../../components/HomeList'
import { getListData } from '../../../fetch/home'

import LoadMore from '../../../components/loadMore'

class HomeList extends Component {
    constructor() {
        super()
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            hasMore: false,
            data: [],
            isLoading: true,
            page: 0
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        var page = ++this.state.page;

        this.setState({
            isLoading: true,
            page: page
        })

        getListData(page, 'beijing').then(function (res) {
            return res.json()
        }).then(result => {
            this.setState({
                hasMore: !!result.hasMore,
                data: this.state.data.concat(result.data),
                isLoading: false
            })
        })
    }

    render() {
        return (
            <div className="box list-box">
                <h2 className="box-title">猜你喜欢</h2>
                {
                    this.state.data.length ?
                        <List data={this.state.data}/> :
                        ''
                }
                {
                    this.state.hasMore ?
                        <LoadMore
                            isLoading={this.state.isLoading}
                            fetchData={this.fetchData.bind(this)} /> : 
                        ''
                }
            </div>
        )
    }
}

export default HomeList