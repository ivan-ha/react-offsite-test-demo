import React, {Component} from 'react';
import passwordHash from 'password-hash';
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
        this.addUser('foo@bar.com', 'hello');
    }

    render() {
        const greeting = (
            <Greeting
                user={this.state.name}
                onSignOutClick={() => this.setState({name: null, login: false})} />
        );
        const signInUp = (
            <div>
                <SignIn
                    onSignInSubmit={(email, password) => this.signInHandler(email, password)}/>
                <SignUp
                    onSignUpSubmit={(email, password, confirmPassword) => this.signUpHandler(email, password, confirmPassword)} />
            </div>
        );

        return (
            <div className='col-md-4 col-md-push-8 user-panel'>
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
        if (passwordHash.verify(password, this.getPassword(email))) {
            this.loginUser(email);
        }
        else {
            alert('Incorrect credentials!');
        }
    }

    signUpHandler(email, password, confirmPassword) {
        if (password !== confirmPassword) {
            alert('The passwords you entered do no match.');
        }
        else if (this.hasUser(email)) {
            alert('The email has been used.');
        }
        else if (!this.isEmail(email)) {
            alert('The email is invalid.');
        }
        else if (!this.isSafePassword(password)) {
            alert('The password had to be 6-12 alphanumeric.');
        }
        else {
            this.addUser(email, password);
            this.loginUser(email);
        }
    }

    getPassword(email) {
        return JSON.parse(localStorage.getItem('account'))[email];
    }

    hasUser(email) {
        return JSON.parse(localStorage.getItem('account')).hasOwnProperty(email);
    }

    addUser(email, password) {
        let account = JSON.parse(localStorage.getItem('account')) || {};
        if (!account.hasOwnProperty(email)) {
            account[email] = passwordHash.generate(password);
        }
        localStorage.setItem('account', JSON.stringify(account));
    }

    loginUser(email) {
        this.setState({
            name: email,
            login: true
        });
    }

    isEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    isSafePassword(password) {
        const re = /^([a-zA-Z0-9_-]){6,12}$/;
        return re.test(password);
    }
}

export default UserPanel;
