import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from "./App/App";
import './index.css';
import reducer from './App/reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

/*
import {createStore} from 'redux';


function playlist(state = [], action) {

    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ]
    }

    return state;
}

const store = createStore(playlist);


store.subscribe(() => {
    console.log('subscribe', store.getState());
    const list = document.querySelectorAll('.list')[0];
    list.innerHTML = '';
    document.querySelectorAll('.trackInput')[0].value = '';
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    });
});


/!*store.dispatch({type: 'ADD_TRACK', payload: 'Smells like teen spirit'});
store.dispatch({type: 'ADD_TRACK', payload: 'Enter Sandman'});*!/


const addTrackBtn = document.querySelectorAll('.addTrack')[0];
addTrackBtn.addEventListener('click', () => {
    const trackName = document.querySelectorAll('.trackInput')[0].value;
    console.log('trackName', trackName);
    store.dispatch({type: 'ADD_TRACK', payload: trackName});
});*/
