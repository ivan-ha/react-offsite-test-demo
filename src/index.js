import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import ListView from './components/list-view'
import NavigationBar from './components/navigation-bar'

const categoriesUrl = 'http://localhost:3000/categories';
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
    },
    {
        key: '23f3t45hif',
        image: '/img4.jpg',
        title: 'title 4',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a turpis tortor. In rhoncus eleifend dolor ac pretium. Cras interdum mollis ultricies. Mauris porttitor dui quis neque varius vestibulum. Donec ultricies mauris lectus, et mattis ante ullamcorper ut. Cras dictum lorem vitae velit pretium, nec dignissim quam iaculis. Pellentesque eget faucibus mauris, eu porta lectus. Aliquam erat volutpat. Etiam at massa et enim accumsan faucibus.',
        url: '#'
    },
    {
        key: 'y5u65',
        image: '/img5.jpg',
        title: 'title 5',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a turpis tortor. In rhoncus eleifend dolor ac pretium. Cras interdum mollis ultricies. Mauris porttitor dui quis neque varius vestibulum. Donec ultricies mauris lectus, et mattis ante ullamcorper ut. Cras dictum lorem vitae velit pretium, nec dignissim quam iaculis. Pellentesque eget faucibus mauris, eu porta lectus. Aliquam erat volutpat. Etiam at massa et enim accumsan faucibus.',
        url: '#'
    },
    {
        key: '909ewu65uflk',
        image: '/img6.jpg',
        title: 'title 6',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a turpis tortor. In rhoncus eleifend dolor ac pretium. Cras interdum mollis ultricies. Mauris porttitor dui quis neque varius vestibulum. Donec ultricies mauris lectus, et mattis ante ullamcorper ut. Cras dictum lorem vitae velit pretium, nec dignissim quam iaculis. Pellentesque eget faucibus mauris, eu porta lectus. Aliquam erat volutpat. Etiam at massa et enim accumsan faucibus.',
        url: '#'
    }
]

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };

        this.getCategories();
    }

    getCategories() {
        fetch(categoriesUrl).then((response) => {
            return response.json();
        }).then((json) => {
            this.setState({
                categories: json
            });
        });
    }

    render() {
        return (
            <div>
                <NavigationBar categories={this.state.categories} />
                <ListView articles={dummyData} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
