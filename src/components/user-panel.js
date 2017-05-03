import React, {Component} from 'react';
import Greeting from './greeting';
import SignIn from './sign-in';
import SignUp from './sign-up';

const UserPanel = ({email, login, signUp, signIn, signOut}) => {
    const greeting = (
        <Greeting
            user={email}
            onSignOutClick={signOut} />
    );
    const signInUp = (
        <div>
            <SignIn
                onSignInSubmit={(email, password) => signIn(email, password)}/>
            <SignUp
                onSignUpSubmit={(email, password, confirmPassword) => signUp(email, password, confirmPassword)} />
        </div>
    );

    return (
        <div className='col-md-4 col-md-push-8 user-panel'>
            <div className='panel panel-default'>
                <div className='panel-heading'>
                    <h3 className='panel-title'>User Panel</h3>
                </div>
                <div className='panel-body'>
                    {login ? greeting : signInUp}
                </div>
            </div>
        </div>
    );
};

export default UserPanel;
