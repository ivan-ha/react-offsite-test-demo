import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchArticlesIfNeeded, fetchCategoriesIfNeeded, signUpHandler, signInHandler, signOutHandler, initUsers} from '../actions';
import ListView from '../components/list-view';
import NavigationBar from '../components/navigation-bar';
import UserPanel from '../components/user-panel';

class Container extends Component {
    constructor(props) {
        super(props);
        this.getNextArticles = this.getNextArticles.bind(this);
        this.props.dispatch(fetchCategoriesIfNeeded());
        this.props.dispatch(fetchArticlesIfNeeded(this.props.articles.page));
        this.props.dispatch(initUsers('foo@bar.com', 'hello2017'));
    }

    getNextArticles = () => {
        const {page} = this.props.articles;
        this.props.dispatch(fetchArticlesIfNeeded(page));
    }

    signUp = (email, password, confirmPassword) => {
        this.props.dispatch(signUpHandler(email, password, confirmPassword));
    }

    signIn = (email, password) => {
        this.props.dispatch(signInHandler(email, password));
    }

    signOut = () => {
        this.props.dispatch(signOutHandler());
    }

    render() {
        return (
            <div>
                <NavigationBar categories={this.props.categories}/>
                <UserPanel
                    email={this.props.users.email}
                    login={this.props.users.login}
                    signUp={this.signUp}
                    signIn={this.signIn}
                    signOut={this.signOut} />
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
    const {email, login} = state.users || {
        email: null,
        login: false
    };

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
        },
        users: {
            email,
            login
        }
    }
};

export default connect(mapStateToProps)(Container);
