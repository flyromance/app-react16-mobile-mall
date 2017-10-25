import React, { Component } from 'react'

import './style.less'

class HomeAd extends Component {
    constructor() {
        super()
        this.state = {
            hasLoaded: false
        }
    }

    render() {
        return (
            <div className="ad-box">
                <ul className="ad-list clearfix">
                    {
                        this.props.data.map((item, index) => {
                            return <li key={index} className="ad-item">
                                <a href={item.link}>
                                    <img src={item.img} alt={item.title} title={item.title} />
                                </a>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default HomeAd