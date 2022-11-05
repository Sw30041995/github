import React from 'react';
import icon from '../icon/icon.png'

export const Header = () => {
    return (
        <header>
            <img src={icon} alt="Logo"/>
            <input type="text" placeholder='Enter GitHub username'/>
        </header>
    )
}

