export const createProject = (project) => {
    return (dispatch, getState,{getFirebase, getFirestore}) => {
        // async call tp database
        dispatch({ type: 'CREATE_PROJECT', project: project });

    }
};