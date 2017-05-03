export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

const requestArticles = (page) => {
    return {
        type: REQUEST_ARTICLES,
        page
    };
};

const receiveArticles = (page, hasMore, json) => {
    return {
        type: RECEIVE_ARTICLES,
        page,
        hasMore,
        lists: json.map(article => article)
    };
};

const fetchArticles = (page) => (dispatch) => {
    dispatch(requestArticles(page));
    return fetch(`http://localhost:3000/articles?_page=${page}&_limit=6`).then((response) => {
        return response.json();
    }).then((json) => {
        const hasMore = (json.length !== 0);
        return dispatch(receiveArticles(page, hasMore, json));
    });
};

const shouldFetchArticles = (articles) => {
    if (!articles) {
        return true;
    }
    else if (articles.articlesIsFetching || !articles.hasMore) {
        return false;
    }
    else {
        return true;
    }
};

export const fetchArticlesIfNeeded = (page) => (dispatch, getState) => {
    if (shouldFetchArticles(getState().articles)) {
        return dispatch(fetchArticles(page));
    }
    else {
        return Promise.resolve();
    }
};

const requestCategories = () => {
    return {
        type: REQUEST_CATEGORIES
    };
};

const receiveCategories = (json) => {
    return {
        type: RECEIVE_CATEGORIES,
        categories: json.map(category => category)
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
