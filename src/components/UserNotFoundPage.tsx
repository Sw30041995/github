import React from 'react';
import user from '../icon/user.png'

export const UserNotFoundPage = () => {
    return (
        <div className='userNotFoundPage'>
            <img src={user} alt="user"/>
            <h3 className='title'>User not found</h3>
        </div>
    )
}

