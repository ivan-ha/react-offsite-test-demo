import React from 'react';

const NavigationBarItem = ({category}) => {
    const url = category.url;
    const text = category.text;

    return (
        <li>
            <a href={url}>{text}</a>
        </li>
    );
}

export default NavigationBarItem;