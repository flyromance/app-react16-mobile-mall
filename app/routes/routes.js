import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Wrapper from "../pages/Wrapper"
import Home from "../pages/Home"
import City from "../pages/City"
import Search from "../pages/Search"
import Detail from "../pages/Detail"
import User from "../pages/User"
import NotFound from "../pages/NotFound"

class RouterMap extends Component {
	render() {
		return (
			<Router history={this.props.history} >
	        	<Route path='/' component={Wrapper}>
					<IndexRoute component={Home} />
					<Route path="home" component={Home} />
					<Route path="city" component={City} />
					<Route path="search/:type(/:keyword)" component={Search} />
					<Route path="detail/:id" component={Detail} />
					<Route path="user" component={User} />
					<Route path="*" component={NotFound} />
				</Route>
	        </Router>
		)
	}
}

export default RouterMap