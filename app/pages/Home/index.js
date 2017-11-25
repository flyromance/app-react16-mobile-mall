import React, { Component } from 'react'

import HomeHeader from '@/components/HomeHeader'
import Category from '@/components/Category'
import Ad from './subpage/ad'
import List from './subpage/list'

import './subpage/style.less'

class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader></HomeHeader>
                <Category></Category>
                <Ad />
                <List />
            </div>
        )
    }
}

export default Home