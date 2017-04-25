import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ListView from './components/list-view'

const dummyData = [
    {
        key: 'd23d32ifhu',
        image: '/img1.jpg',
        title: 'title 1',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a turpis tortor. In rhoncus eleifend dolor ac pretium. Cras interdum mollis ultricies. Mauris porttitor dui quis neque varius vestibulum. Donec ultricies mauris lectus, et mattis ante ullamcorper ut. Cras dictum lorem vitae velit pretium, nec dignissim quam iaculis. Pellentesque eget faucibus mauris, eu porta lectus. Aliquam erat volutpat. Etiam at massa et enim accumsan faucibus.',
        url: '#'
    },
    {
        key: '23f3hif',
        image: '/img2.jpg',
        title: 'title 2',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a turpis tortor. In rhoncus eleifend dolor ac pretium. Cras interdum mollis ultricies. Mauris porttitor dui quis neque varius vestibulum. Donec ultricies mauris lectus, et mattis ante ullamcorper ut. Cras dictum lorem vitae velit pretium, nec dignissim quam iaculis. Pellentesque eget faucibus mauris, eu porta lectus. Aliquam erat volutpat. Etiam at massa et enim accumsan faucibus.',
        url: '#'
    },
    {
        key: '909ewflk',
        image: '/img3.jpg',
        title: 'title 3',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a turpis tortor. In rhoncus eleifend dolor ac pretium. Cras interdum mollis ultricies. Mauris porttitor dui quis neque varius vestibulum. Donec ultricies mauris lectus, et mattis ante ullamcorper ut. Cras dictum lorem vitae velit pretium, nec dignissim quam iaculis. Pellentesque eget faucibus mauris, eu porta lectus. Aliquam erat volutpat. Etiam at massa et enim accumsan faucibus.',
        url: '#'
    }
]

class App extends Component {
    render() {
        return (
            <ListView articles={dummyData} />
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
