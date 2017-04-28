import React from 'react';
import NavigationBarItem from './navigation-bar-item'

const NavigationBar = (props) => {
    const categoryItems = props.categories.map((category) => {
        return (
            <NavigationBarItem
                key={category.text}
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
};

export default NavigationBar;
