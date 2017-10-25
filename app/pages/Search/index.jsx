import React, { Component } from 'react'
import { hashHistory } from 'react-router'

import Header from '../../components/SearchHeader'
import List from './subpage/List'

class Search extends Component {
	constructor() {
		super()
		this.state = {
			
		}
	}

	handleClick(value) {
		hashHistory.push('/detail/' + value)
	}

	render() {
		var that = this;

		return (
			<div>
				<Header />
				<List params={this.props.params}/>
			</div>
		)
	}
}

export default Search