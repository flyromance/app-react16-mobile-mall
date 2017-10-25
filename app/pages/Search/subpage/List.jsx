import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import List from '../../../components/HomeList'
import { getSearchData } from '../../../fetch/search'

import LoadMore from '../../../components/loadMore'

class SearchList extends Component {
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
        var page = ++this.state.page,
            { type, keyword } = this.props.params

        this.setState({
            isLoading: true,
            page: page
        })

        getSearchData(type, keyword, page).then(function (res) {
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
                {
                    this.state.data.length ?
                        <List data={this.state.data} /> :
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

export default SearchList