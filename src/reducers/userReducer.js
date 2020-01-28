import { USER_LOGIN } from '../actions/userActions' 

const INITIAL_STATE = {
    name: '',
    role: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return {

            }
        default:
            return state
    }
}