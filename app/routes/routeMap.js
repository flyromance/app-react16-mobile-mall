import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Wrapper from "../pages/Wrapper"
import Home from "../pages/Home"
import List from "../pages/List"
import Detail from "../pages/Detail"
import Hello from "../pages/Hello"
import NotFound from "../pages/NotFound"
import Todo from "../pages/Todo"

class RouterMap extends Component {
	render() {
		return (
			<Router history={this.props.history} >
	        	<Route path='/' component={Wrapper}>
					<IndexRoute component={Home} />
					<Route path="home" component={Home} />
					<Route path="list" component={List} />
					<Route path="detail/:id" component={Detail} />
					<Route path="hello" component={Hello} />
					<Route path="todo" component={Todo} />
					<Route path="*" component={NotFound} />
				</Route>
	        </Router>
		)
	}
}

export default RouterMap