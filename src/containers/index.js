import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchArticlesIfNeeded} from '../actions';
import ListView from '../components/list-view';
import NavigationBar from '../components/navigation-bar';
import UserPanel from '../components/user-panel';

class Container extends Component {
    constructor(props) {
        super(props);
        this.getNextArticles = this.getNextArticles.bind(this);
        this.props.dispatch(fetchArticlesIfNeeded(this.props.page));
    }

    getNextArticles = () => {
        const {page} = this.props;
        this.props.dispatch(fetchArticlesIfNeeded(page));
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <UserPanel />
                <ListView
                    articles={this.props}
                    getNextArticles={this.getNextArticles} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {page} = state.articles;
    const {isFetching, lists, hasMore} = state.articles || {
        isFetching: true,
        hasMore: true,
        lists: []
    }

    return {
        page,
        isFetching,
        hasMore,
        lists
    }
};

export default connect(mapStateToProps)(Container);
