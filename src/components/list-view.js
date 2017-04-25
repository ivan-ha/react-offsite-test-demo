import React from 'react';
import ListViewItem from './list-view-item';

const ListView = (props) => {
    const listItems = props.articles.map((article) => {
        return (
            <ListViewItem
                key={article.key}
                article={article} />
        );
    });

    return (
        <ul className='col-md-8 list-group'>
            {listItems}
        </ul>
    );
};

export default ListView;
