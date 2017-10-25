import React, { Component } from 'React';
import PureRender from 'react-addons-pure-render-mixin'

import './style.less'

class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var item = this.props.data

        return (
            <div className="list-item clearfix">
                <div className="fl list-item-icon">
                    <img src={item.img} alt={item.title} title={item.title} />
                </div>
                <div className="list-item-content">
                    <div className="list-item-title">
                        <h3>{item.title}</h3>
                        <span className="list-item-distance">
                            <i className="iconfont icon-coordinates"></i>
                            {item.distance}
                        </span>
                    </div>
                    <div className="list-item-summary">{item.subTitle}</div>
                    <div className="list-item-footer">
                        <span>￥{item.price}</span>
                        <span>已售{item.number}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item