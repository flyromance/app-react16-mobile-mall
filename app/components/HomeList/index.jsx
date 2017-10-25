import React, { Component } from 'React';
import PureRender from 'react-addons-pure-render-mixin'

import Item from './Item'
import './style.less'

class List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="list-container">
                {this.props.data.map(function (item, index) {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default List