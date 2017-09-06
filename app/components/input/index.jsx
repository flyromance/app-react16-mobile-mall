import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Input extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <input type="text" style={{height: '40px', width: '100%', fontSize: '16px'}} 
                value={this.state.value}
                onKeyUp={this.handleKeyup.bind(this)} 
                onChange={this.handleChange.bind(this)} />
        );
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleKeyup(e) {
        let value = e.target.value;

        if (e.keyCode == 13 && value.trim()) {
            this.setState({
                value: ''
            });
            this.props.addItem(e.target.value);
        }
    }
}

export default Input