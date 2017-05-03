import {SIGN_UP_USER, SIGN_IN_USER, SIGN_OUT_USER} from '../actions';

const initialUsersState = {
    email: null,
    login: false
};

const users = (state = initialUsersState, action) => {
    switch (action.type) {
        case SIGN_UP_USER:
            return Object.assign({}, state, {
                email: null,
                login: false
            });
        case SIGN_IN_USER:
            return Object.assign({}, state, {
                email: action.email,
                login: true
            });
        case SIGN_OUT_USER:
            return Object.assign({}, state, {
                email: null,
                login: false
            });
        default:
            return state;
    }
};

export default users;
