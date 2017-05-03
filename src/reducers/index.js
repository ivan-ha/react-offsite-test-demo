import {combineReducers} from 'redux';
import {REQUEST_ARTICLES, RECEIVE_ARTICLES} from '../actions';

const initialArticlesState = {
    isFetching: false,
    page: 1,
    hasMore: true,
    lists: []
};

const articles = (state = initialArticlesState, action) => {
    switch (action.type) {
        case REQUEST_ARTICLES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_ARTICLES:
            return Object.assign({}, state, {
                isFetching: false,
                page: parseInt(action.page) + 1,
                hasMore: action.hasMore,
                lists: [...state.lists, ...action.lists]
            });
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    articles
});

export default rootReducer;
