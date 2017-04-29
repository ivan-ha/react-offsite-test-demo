import React from 'react';

const SignUp = ({onSignUpSubmit}) => {
    const getValueById = (id) => {
        return document.querySelector(`#${id}`).value;
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSignUpSubmit(getValueById('sign-up-email'), getValueById('sign-up-password'), getValueById('sign-up-confirm-password'));
    };

    return (
        <div className='sign-up'>
            <div className='panel panel-info'>
                <div className='panel-heading'>
                    <h4 className='panel-title'>Sign Up</h4>
                </div>
                <div className='panel-body'>
                    <form onSubmit={onSubmitHandler}>
                        <div className='form-group'>
                            <label htmlFor='sign-up-email'>Email address</label>
                            <input type='email' className='form-control' id='sign-up-email' placeholder='Email' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='sign-up-password'>Password *</label>
                            <input type='password' className='form-control' id='sign-up-password' placeholder='Password' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='sign-up-password'>Confirm password *</label>
                            <input type='password' className='form-control' id='sign-up-confirm-password' placeholder='Confirm password' required />
                        </div>
                        <em className="help-block">* Need to be 6-12 alphanumeric chars.</em>
                        <button type='submit' className='btn btn-info pull-right'>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
