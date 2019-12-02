const initialState = {
    currentUser: {}
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload}
        default:
            return state;
    }
}