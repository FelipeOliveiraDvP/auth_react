import { createStore } from 'redux';

const userInitialState = {
    name: ''
}

const userReducer = (state = userInitialState, action) => {

}

const store = createStore(userReducer)

export default store