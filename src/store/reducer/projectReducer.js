
const initState = {
    projects: [
        { id: '1', title: 'abc', content: 'blah ' },
        { id: '2', title: 'def', content: 'blah blah' },
        { id: '3', title: 'ghi', content: 'blah blah blah' }
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}
export default projectReducer;