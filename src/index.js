import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import ListView from './components/list-view'
import NavigationBar from './components/navigation-bar'
import UserPanel from './components/user-panel';

const categoriesUrl = 'http://localhost:3000/categories';

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
                <ListView />
                <UserPanel />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
