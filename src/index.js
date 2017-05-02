import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import ListView from './components/list-view'
import NavigationBar from './components/navigation-bar'
import UserPanel from './components/user-panel';

const App = () => {
    return (
        <div>
            <NavigationBar />
            <UserPanel />
            <ListView />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
