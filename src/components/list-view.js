import React, {Component} from 'react';
import ListViewItem from './list-view-item';

class ListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.articles.map((article) => {
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
    }
}

export default ListView;
