import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class User extends Component {
	constructor() {
		super()
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	render() {
		return (
			<div>NotFound</div>
		)
	}
}

export default User