import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import './static/style/common.less'

import configureStore from './store/configureStore'

import RouterMap from './routes'

const store = configureStore()
render(
    <Provider store={store}>
        <RouterMap history={hashHistory} />
    </Provider>,
    document.getElementById('root')
)
