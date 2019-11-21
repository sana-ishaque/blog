
const initState = {
    projects: [
        { id: '1', title: 'abc', content: 'blah ' },
        { id: '2', title: 'def', content: 'blah blah' },
        { id: '3', title: 'ghi', content: 'blah blah blah' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created prooject', action.project)
    }
    return state;
}
export default projectReducer;