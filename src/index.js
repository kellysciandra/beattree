import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// will be able to access our redux store and/or dispatch actions from any component
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import artistsReducer from './reducers/artistsReducer.js'
import thunk from 'redux-thunk';


const store = createStore(artistsReducer, (applyMiddleware(thunk)));


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

