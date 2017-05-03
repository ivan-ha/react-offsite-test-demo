import {combineReducers} from 'redux';
import articles from './articles';
import categories from './categories';
import users from './users';

const rootReducer = combineReducers({
    articles,
    categories,
    users
});

export default rootReducer;
