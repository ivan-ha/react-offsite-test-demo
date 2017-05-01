import React from 'react';

const Greeting = ({user, onSignOutClick}) => {
    return (
        <div>
            <div className='alert alert-success' role='alert'>
                <b>Hello! {user}</b>
            </div>
            <button className='btn btn-danger pull-right' type='button' onClick={() => onSignOutClick()}>Sign out</button>
        </div>
    );
}

export default Greeting;
