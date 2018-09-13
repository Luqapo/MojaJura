import ReactDOM from "react-dom";
import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from "./app.jsx";
import reducer from './store/reducer.jsx';

const store = createStore(reducer);

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Provider store={store}><App/></Provider>,
        document.getElementById('app')
    );
});
