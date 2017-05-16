import { expect } from 'chai';
import articles from '../../src/reducers/articles';
import {REQUEST_ARTICLES, RECEIVE_ARTICLES} from '../../src/actions';

describe("articles reducer", () => {

    it("should handle initial state", () => {
        expect(articles(undefined, {})).to.deep.equal({
            articlesIsFetching: false,
            page: 1,
            hasMore: true,
            lists: []
        });
    });

    it("should set articlesIsFetching flag to true", () => {
        expect(articles(undefined, {type: REQUEST_ARTICLES})).to.deep.equal({
            articlesIsFetching: true,
            page: 1,
            hasMore: true,
            lists: []
        });
    });

    it("should add articles to lists", () => {
        const action = {
            type: RECEIVE_ARTICLES,
            hasMore: true,
            page: 1,
            lists: ['a', 'b', 'c']
        };

        expect(articles(undefined, action)).to.deep.equal({
            articlesIsFetching: false,
            page: 2,
            hasMore: true,
            lists: ['a', 'b', 'c']
        });
    });

});
