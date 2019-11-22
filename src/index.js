import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducer/rootreducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig';


const middlewares = [
    thunk.withExtraArgument(getFirebase, getFirestore)
]

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middlewares),
    )
);

// const store = createStore(rootReducer,
//     compose(
//         applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//         reactReduxFirebase(firebaseConfig), // redux binding for firebase
//         reduxFirestore(firebaseConfig) // redux bindings for firestore
//     )
// );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
