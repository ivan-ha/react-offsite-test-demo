import React from 'react';

const ListViewItem = ({article}) => {
    const imageUrl = article.image;
    const articleTitle = article.title;
    const articlePreview = article.preview;
    const articleUrl = article.url

    return (
        <li onClick={() => alert(`Should open "${articleTitle}"`)} className='list-group-item'>
            <div className='media'>
                <img className='pull-left img-responsive list-view-img' src={imageUrl} />

                <div className='media-body'>
                    <h4 className='media-heading'>
                        {articleTitle}
                    </h4>
                    {articlePreview}
                </div>
            </div>
        </li>
    );
};

export default ListViewItem;
