export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async call tp database
        const firestore = getFirestore();
        firestore.collection('stories').add({
            ...project,
            authorFirstName: 'Sarah',
            authorLastName: 'Ahmed',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project });
        }).catch((error) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error })
        })
    }
};

