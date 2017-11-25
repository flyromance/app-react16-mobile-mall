import React, { Component } from 'react'
// import { PropTypes } from 'react' // 自从15.5.0之后不建议这么用了，对象还是有的，估计16之后就移除了; 建议用 prop-types这个模块
import PropTypes from 'prop-types' 

class Wrapper extends Component {
    constructor() {
        super()
        this.state = {
            initDone: true
        }
    }

    componentDidMount() {
        // var that = this
        // setTimeout(function () {
        //     that.setState({
        //         initDone: true
        //     })
        // }, 1000)
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.initDone ? this.props.children : <div>加载中...</div>}
                </div>
            </div>
        )
    }
}

Wrapper.propTypes = {
    children: PropTypes.element
}

Wrapper.defaultProps = {
    
}

export default Wrapper