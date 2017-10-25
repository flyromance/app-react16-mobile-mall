import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

function debounce(fn, interval) {
	var timer = null;

	return function () {
		var ctx = this,
			args = arguments
		clearTimeout(timer)
		timer = setTimeout(function () {
			fn.apply(ctx, args)
		}, interval || 50)
	}
}

class LoadMore extends Component {
	constructor() {
		super()
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		var timer = null,
			that = this,
			elem = this.refs.wrapper
			
		window.addEventListener('scroll', debounce(function() {
			if (that.props.isLoading) return

			var top = elem.getBoundingClientRect().top,
				scorllTop = document.body.scrollTop,
				screenHeight = window.innerHeight;
			if (top < screenHeight + 100) {
				that.handleLoad()
			}
		}, 50), false)
	}

	componentWillUnmount() {
		
	}

	render() {
		return (
			<div className="load-more-box" ref="wrapper">
				{
					this.props.isLoading ?
						<div className="iconfont icon-more"></div> :
						<div className="text-center">加载更多</div>
				}
			</div>
		)
	}

	handleLoad() {
		this.props.fetchData()
	}
}

export default LoadMore