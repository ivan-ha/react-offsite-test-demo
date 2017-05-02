import React, {Component} from 'react';
import NavigationBarItem from './navigation-bar-item'

const categoriesUrl = 'http://localhost:3000/categories';

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };

        this.getCategories();
    }

    render() {
        const categoryItems = this.state.categories.map((category) => {
            return (
                <NavigationBarItem
                    key={category.id}
                    category={category} />
            );
        });

        return (
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container-fluid'>
                    <div className="navbar-header">
                        <button type="button" className="pull-left navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">HK01</a>
                    </div>

                    <div className='collapse navbar-collapse' id="bs-example-navbar-collapse-1">
                        <ul className='nav navbar-nav'>
                            {categoryItems}
                        </ul>
                    </div>
                </div>
            </nav>
        );
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
}

export default NavigationBar;
