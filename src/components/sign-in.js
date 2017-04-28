import React from 'react';

const SignIn = ({onSignInSubmit}) => {
    const getValueById = (id) => {
        return document.querySelector(`#${id}`).value;
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSignInSubmit(getValueById('input-email'), getValueById('input-password'));
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
                            <label htmlFor='input-email'>Email address</label>
                            <input type='email' className='form-control' id='input-email' placeholder='Email' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='input-password'>Password</label>
                            <input type='password' className='form-control' id='input-password' placeholder='Password' />
                        </div>
                        <button type='submit' className='btn btn-default'>Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
