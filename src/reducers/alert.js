export function alert(state = '', action) {
    switch (action.type) {
        case 'ERROR':
            return 'Invalid username or password.'
        case 'LOGOUT_USER': 
            return ''
        default:
            return state;
    }
}