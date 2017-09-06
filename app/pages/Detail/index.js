import React, { Component } from 'react'

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.params.id
		}
	}

	render() {
		return (<div>this is detail {this.state.id}</div>)
	}
}

export default Detail