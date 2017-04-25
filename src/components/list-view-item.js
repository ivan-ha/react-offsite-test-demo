import React from 'react';

const ListViewItem = ({article}) => {
    const imageUrl = article.image;
    const articleTitle = article.title;
    const articlePreview = article.preview;
    const articleUrl = article.url

    return (
        <li onClick={() => alert(`Open "${articleUrl}"`)} className='list-group-item'>
            <div className='media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl}></img>
                </div>

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
