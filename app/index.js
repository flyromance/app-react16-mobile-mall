import React from 'react';
import { render } from 'react-dom';
// import { hashHistory } from 'react-router';
// import { Provider } from 'react-redux'

// import configureStore from './store/configureStore'

// 导入样式
import './static/style/common.less';

import Todo from './pages/Todo';

import Perf from 'react-addons-perf';

console.log(__DEV__);
window.Perf = Perf;

// const store = configureStore()

render(
    // <Provider store={store}>
        <Todo />
    // </Provider>,
    document.getElementById('root')
);
