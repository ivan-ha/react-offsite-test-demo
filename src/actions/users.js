import passwordHash from 'password-hash';

export const SIGN_UP_USER = 'SIGN_UP_USER';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

const signUpUser = (email) => {
    return {
        type: SIGN_UP_USER,
        email
    };
};

const signInUser = (email) => {
    return {
        type: SIGN_IN_USER,
        email
    };
};

const signOutUser = () => {
    return {
        type: SIGN_OUT_USER
    };
};

const getPassword = (email) => {
    return JSON.parse(localStorage.getItem('account'))[email];
};

const hasUser = (email) => {
    return JSON.parse(localStorage.getItem('account')).hasOwnProperty(email);
};

const addUser = (email, password) => {
    let account = JSON.parse(localStorage.getItem('account')) || {};
    if (!account.hasOwnProperty(email)) {
        account[email] = passwordHash.generate(password);
    }
    localStorage.setItem('account', JSON.stringify(account));
};

const isEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isSafePassword = (password) => {
    const re = /^([a-zA-Z0-9_-]){6,12}$/;
    return re.test(password);
};

export const initUsers = (email, password) => (dispatch) => {
    addUser(email, password);
    return dispatch(signUpUser(email));
};

export const signUpHandler = (email, password, confirmPassword) => (dispatch) => {
    if (password !== confirmPassword) {
        alert('The passwords you entered do no match.');
    }
    else if (hasUser(email)) {
        alert('The email has been used.');
    }
    else if (!isEmail(email)) {
        alert('The email is invalid.');
    }
    else if (!isSafePassword(password)) {
        alert('The password had to be 6-12 alphanumeric.');
    }
    else {
        addUser(email, password);
        return dispatch(signInUser(email));
    }
};

export const signInHandler = (email, password) => (dispatch) => {
    if (passwordHash.verify(password, getPassword(email))) {
        return dispatch(signInUser(email));
    }
    else {
        alert('Incorrect credentials!');
    }
};

export const signOutHandler = () => (dispatch) => {
    return dispatch(signOutUser());
};
