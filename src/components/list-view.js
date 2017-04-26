import React, {Component} from 'react';
import ListViewItem from './list-view-item';
import InfiniteScroll from 'react-infinite-scroll-component';

class ListView extends Component {
    constructor(props) {
        super(props);

        this.listItems = this.props.articles.map((article) => {
            return (
                <ListViewItem
                    key={article.key}
                    article={article} />
            );
        });

        this.state = {
            lists: this.listItems
        };

        this.generateListItems = this.generateListItems.bind(this);
    }

    generateListItems() {
        const moreLists = [];
        moreLists.push(this.listItems);

        setTimeout(() => {
            this.setState({
                lists: this.state.lists.concat(moreLists)
            });
        }, 1000);
    }

    render() {
        return (
            <ul className='col-md-8 list-group'>
                <InfiniteScroll
                    next={this.generateListItems}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}>
                    {this.state.lists}
                </InfiniteScroll>
            </ul>
        );
    }
}

export default ListView;
