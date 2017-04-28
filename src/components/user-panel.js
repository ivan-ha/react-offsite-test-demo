import React, {Component} from 'react';
import Greeting from './greeting';
import SignIn from './sign-in';
import SignUp from './sign-up';

class UserPanel extends Component {
    constructor() {
        super();

        this.state = {
            name: null,
            login: false
        };

        // Create default dummy account
        localStorage.setItem('account', JSON.stringify({
            'foo@bar.com': 'hello'
        }));
    }

    render() {
        const greeting = (
            <Greeting
                user={this.state.name}
                onSignOutClick={() => this.setState({...this.state, login: false})} />
        );
        const signInUp = (
            <div>
                <SignIn
                    onSignInSubmit={(email, password) => this.signInHandler(email, password)}/>
                <SignUp />
            </div>
        );

        return (
            <div className='col-md-4 user-panel'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <h3 className='panel-title'>User Panel</h3>
                    </div>
                    <div className='panel-body'>
                        {this.state.login ? greeting : signInUp}
                    </div>
                </div>
            </div>
        );
    }

    signInHandler(email, password) {
        if (this.getPassword(email) === password) {
            this.setState({
                name: email,
                login: true
            });
        }
        else {
            alert('Incorrect credentials!');
        }
    }

    getPassword(email) {
        return JSON.parse(localStorage.getItem('account'))[email];
    }

    addUser(email, password) {
        let account = JSON.parse(localStorage.getItem('account'));
        account[email] = password;
        localStorage.setItem('account', JSON.stringify(account));
    }
}

export default UserPanel;
