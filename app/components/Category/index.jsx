import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends Component {
    constructor() {
        super()
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            index: 0
        }
    }

    render() {
        var that = this;
        var swipeOptions = {
            // auto: 2000,
            callback: function (index) {
                that.setState({
                    index: index
                })
            }
        }

        return (
            <div className="carousel">
                <ReactSwipe swipeOptions={swipeOptions}>
                    <div>
                        <ul className="category-list">
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224309185-1519181081.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224309185-1519181081.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="category-list">
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="category-list">
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                            <li className="category-item">
                                <div className="category-icon">
                                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png" />
                                </div>
                                <p className="category-title">KTV</p>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="carousel-nav">
                    <ul>
                        <li className={this.state.index === 0 ? 'cur' : ''}></li>
                        <li className={this.state.index === 1 ? 'cur' : ''}></li>
                        <li className={this.state.index === 2 ? 'cur' : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category