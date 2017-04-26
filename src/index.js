import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListView from './components/list-view'
import NavigationBar from './components/navigation-bar'

const categories = [
    {
        url: '#',
        text: '01觀點'
    },
    {
        url: '#',
        text: '01博評'
    },
    {
        url: '#',
        text: '社區'
    },
    {
        url: '#',
        text: '娛樂'
    },
    {
        url: '#',
        text: '韓國大選'
    },
    {
        url: '#',
        text: '國際'
    },
    {
        url: '#',
        text: '女生'
    },
    {
        url: '#',
        text: '藝術3月'
    },
    {
        url: '#',
        text: '藝文創意'
    },
    {
        url: '#',
        text: '體育'
    },
    {
        url: '#',
        text: '熱話'
    },
    {
        url: '#',
        text: '科技玩物'
    },
    {
        url: '#',
        text: '01哲學'
    },
    {
        url: '#',
        text: '武備志'
    },
    {
        url: '#',
        text: '一物'
    },
    {
        url: '#',
        text: '01影像'
    },
    {
        url: '#',
        text: '01活動'
    },
    {
        url: '#',
        text: '01空間'
    },
    {
        url: '#',
        text: '01空間2'
    },
    {
        url: '#',
        text: '01空間3'
    },
    {
        url: '#',
        text: '01空間4'
    },
    {
        url: '#',
        text: '01空間5'
    },
    {
        url: '#',
        text: '01空間6'
    },
    {
        url: '#',
        text: '會員專區'
    },
];
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
    render() {
        return (
            <div>
                <NavigationBar categories={categories} />
                <ListView articles={dummyData} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
