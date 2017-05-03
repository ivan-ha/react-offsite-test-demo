import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchArticlesIfNeeded, fetchCategoriesIfNeeded} from '../actions';
import ListView from '../components/list-view';
import NavigationBar from '../components/navigation-bar';
import UserPanel from '../components/user-panel';

class Container extends Component {
    constructor(props) {
        super(props);
        this.getNextArticles = this.getNextArticles.bind(this);
        this.props.dispatch(fetchCategoriesIfNeeded());
        this.props.dispatch(fetchArticlesIfNeeded(this.props.articles.page));
    }

    getNextArticles = () => {
        const {page} = this.props.articles;
        this.props.dispatch(fetchArticlesIfNeeded(page));
    }

    render() {
        return (
            <div>
                <NavigationBar categories={this.props.categories}/>
                <UserPanel />
                <ListView
                    articles={this.props.articles}
                    getNextArticles={this.getNextArticles} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {page} = state.articles;
    const {articlesIsFetching, lists, hasMore} = state.articles || {
        articlesIsFetching: true,
        hasMore: true,
        lists: []
    };
    const {categoriesIsFetching, categories} = state.categories || {
        categoriesIsFetching: true,
        categories: []
    }

    return {
        articles: {
            page,
            articlesIsFetching,
            hasMore,
            lists
        },
        categories: {
            categoriesIsFetching,
            categories
        }
    }
};

export default connect(mapStateToProps)(Container);
