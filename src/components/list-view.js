import React, {Component} from 'react';
import ListViewItem from './list-view-item';
import InfiniteScroll from 'react-infinite-scroll-component';

class ListView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            hasMore: true,
            lists: []
        };

        this.getArticles(this.state.page);
        this.generateListItems = this.generateListItems.bind(this);
    }

    getArticles(page) {
        fetch(`http://localhost:3000/articles?_page=${page}&_limit=6`).then((response) => {
            return response.json();
        }).then((json) => {
            // Stop infinite scroll when reaching end of data
            if (json.length === 0) {
                this.setState({...this.state, hasMore: false});
            }

            this.setState({
                lists: this.state.lists.concat(json.map((article) => {
                    return (
                        <ListViewItem
                            key={article.id}
                            article={article} />
                    );
                }))
            });
        });
    }

    generateListItems() {
        // Update pagination
        this.setState({...this.state, page: this.state.page + 1});

        // Some intented delay for pagination loading
        setTimeout(() => {
            this.getArticles(this.state.page);
        }, 1000);
    }

    render() {
        return (
            <ul className='col-md-8 col-md-pull-4 list-group'>
                <InfiniteScroll
                    scrollThreshold={1}
                    next={this.generateListItems}
                    hasMore={this.state.hasMore}
                    loader={<img src='./img/loading-gif.gif' className='loading-gif'/>}
                    endMessage={<b>End of list! Thanks for watching😀</b>} >
                    {this.state.lists}
                </InfiniteScroll>
            </ul>
        );
    }
}

export default ListView;
