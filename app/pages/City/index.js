import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../../actions/userinfo.js'


class Hello extends Component {   
    componentDidMount() {
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })
    }
       
    render() {
        return (
            <div>
                <p>hello world</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)