import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components.jsx';
import Chart from 'chart.js'
import store from "./store"

ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>, document.getElementById('groups'));

