import React, { Component } from 'react'
import { Link } from 'react-router'

class Wrapper extends Component {
    render() {
        return (
            <div>
            	<ul>
            		<li>
            			<Link to="/home" >home</Link>
            		</li>
                    <li>
                        <Link to="/list" >to list</Link>
                    </li>
                    <li>
                        <Link to="/hello" >to hello</Link>
                    </li>
                    <li>
                        <Link to="/todo" >todo</Link>
                    </li>
            	</ul>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default Wrapper