export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

const requestCategories = () => {
    return {
        type: REQUEST_CATEGORIES
    };
};

const receiveCategories = (json) => {
    return {
        type: RECEIVE_CATEGORIES,
        categories: json
    };
};

const fetchCategories = () => (dispatch) => {
    dispatch(requestCategories());
    return fetch('http://localhost:3000/categories').then((response) => {
        return response.json();
    }).then((json) => {
        return dispatch(receiveCategories(json));
    });
};

const shouldFetchCategories = (categories) => {
    if (!categories) {
        return true;
    }
    else if (categories.categoriesIsFetching) {
        return false;
    }
    else {
        return true;
    }
};

export const fetchCategoriesIfNeeded = () => (dispatch, getState) => {
    if (shouldFetchCategories(getState().categories)) {
        return dispatch(fetchCategories());
    }
    else {
        return Promise.resolve();
    }
};
