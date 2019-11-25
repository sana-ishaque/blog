import authenticationReducer from './authenticationReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'  //sync firestore to clientside
import { firebaseReducer} from 'react-redux-firebase'; //authentication

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;
