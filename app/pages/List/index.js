import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class List extends Component {
	constructor() {
		super();
		this.state = {
			list: [1, 2, 3]
		}
	}

	handleClick(value) {
		hashHistory.push('/detail/' + value)
	}

	render() {
		var that = this;

		return (
			<div>
				<ul>
					{this.state.list.map(function (item, i) {
						return <li key={i} onClick={that.handleClick.bind(that, item)} >to detail {item}</li>
					})}
				</ul>
			</div>
		)
	}
}

export default List