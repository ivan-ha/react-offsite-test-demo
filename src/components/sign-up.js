import React from 'react';

const SignUp = () => {
    return (
        <div className='sign-up'>
            <div className='panel panel-info'>
                <div className='panel-heading'>
                    <h4 className='panel-title'>Sign Up</h4>
                </div>
                <div className='panel-body'>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='input-email'>Email address</label>
                            <input type='email' className='form-control' id='input-email' placeholder='Email' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='input-password'>Password</label>
                            <input type='password' className='form-control' id='input-password' placeholder='Password' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='input-password'>Confirm password</label>
                            <input type='password' className='form-control' id='input-password' placeholder='Confirm password' />
                        </div>
                        <button type='submit' className='btn btn-default'>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
