import React from 'react';
import ListViewItem from './list-view-item';
import InfiniteScroll from 'react-infinite-scroll-component';

const ListView = ({articles, getNextArticles}) => {
    const lists = articles.lists.map((article) => {
        return (
            <ListViewItem
                key={article.id}
                article={article} />
        );
    });

    return (
        <ul className='col-md-8 col-md-pull-4 list-group'>
            <InfiniteScroll
                scrollThreshold={1}
                next={getNextArticles}
                hasMore={articles.hasMore}
                loader={<img src='./img/loading-gif.gif' className='loading-gif'/>}
                endMessage={<b>End of list! Thanks for watching😀</b>} >
                {lists}
            </InfiniteScroll>
        </ul>
    );
};

export default ListView;
