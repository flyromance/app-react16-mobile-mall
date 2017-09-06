import React, { Component } from 'React';

import Input from '../../components/input';
import List from '../../components/list';

import PureRenderMixin from 'react-addons-pure-render-mixin';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            todos: []
        }
    } 

    render() {
        var that = this;

        return (
            <div>
                <Input addItem={this.addItem.bind(this)} />
                <List todos={this.state.todos} deleteItem={this.deleteItem.bind(this)} />
            </div>
        )
    }

    addItem(value) {
        var id = this.state.todos.length;

        this.setState({
            todos: this.state.todos.concat([{
                id: id,
                text: value
            }])
        });
    }

    deleteItem(id) {
        var todos = this.state.todos;

        this.setState({
            todos: todos.filter(function (item, index) {
                if (item.id != id) {
                    return true;
                }
            })
        });
    }
}

export default Todo