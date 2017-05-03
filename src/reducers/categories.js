import {REQUEST_CATEGORIES, RECEIVE_CATEGORIES} from '../actions';

const initialCategoriesState = {
    categoriesIsFetching: false,
    categories: []
};

const categories = (state = initialCategoriesState, action) => {
    switch (action.type) {
        case REQUEST_CATEGORIES:
            return Object.assign({}, state, {
                categoriesIsFetching: true
            });
        case RECEIVE_CATEGORIES:
            return Object.assign({}, state, {
                categoriesIsFetching: false,
                categories: [...state.categories, ...action.categories]
            });
        default:
            return state;
    }
};

export default categories;
