import { firestore } from '../../config/firebaseConfig'

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async call to database
        firestore.collection('stories').add({
            ...project,
            authorFirstName: 'Ali',
            authorLastName: 'Haider',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project });
        }).catch((error) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error })
        })
    }
};

