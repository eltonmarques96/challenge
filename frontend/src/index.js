import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import getRoutes from './routes/';
import store from './store'
import { Provider } from 'react-redux';

ReactDOM.render(
<Provider store={ store }>
    <BrowserRouter>
        {getRoutes()}
    </BrowserRouter>
    </Provider>,
document.getElementById('root')
);