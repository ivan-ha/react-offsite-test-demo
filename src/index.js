import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import 'whatwg-fetch';
import reducer from './reducers';
import Container from './containers';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const App = () => {
    return (
        <Provider store={store}>
            <Container />
        </Provider>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
