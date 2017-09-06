import React, { Component } from 'React';
import PureRender from 'react-addons-pure-render-mixin'

class List extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        var that = this;

        return (
            <ul>
                {this.props.todos.map(function (item, index) {
                    return <li key={index} onClick={that.handleClick.bind(that, index)}>{item.text}</li>
                })}
            </ul>
        );
    }

    handleClick(id) {
        this.props.deleteItem(id);
    }

}

export default List