export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

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
    else if (articles.isFetching || !articles.hasMore) {
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