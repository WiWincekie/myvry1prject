import Redux from 'redux';



let initialState = {
    username: '',
    userprofile: {},
    repost: []

}


const reducer = (state= initialState, action) => {
    switch (action.type) { 
        case 'UPDATE_USERNAME':
        return {
            ...state, 
            username: action.username
        }
        break;
        case 'UPDATE_USERPROFILE':
        return {
            ...state,
            userprofile: action.userprofile

        }
        default:
        return state;

    }
}

export default  reducer;