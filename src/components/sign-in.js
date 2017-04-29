import React from 'react';

const SignIn = ({onSignInSubmit}) => {
    const getValueById = (id) => {
        return document.querySelector(`#${id}`).value;
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSignInSubmit(getValueById('sign-in-email'), getValueById('sign-in-password'));
    };

    return (
        <div className='sign-in'>
            <div className='panel panel-success'>
                <div className='panel-heading'>
                    <h4 className='panel-title'>Sign In</h4>
                </div>
                <div className='panel-body'>
                    <form onSubmit={onSubmitHandler}>
                        <div className='form-group'>
                            <label htmlFor='sign-in-email'>Email address</label>
                            <input type='email' className='form-control' id='sign-in-email' placeholder='Email' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='sign-in-password'>Password</label>
                            <input type='password' className='form-control' id='sign-in-password' placeholder='Password' required />
                        </div>
                        <button type='submit' className='btn btn-success pull-right'>Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
