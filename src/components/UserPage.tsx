import React from 'react';
import user from '../icon/user.png'
import {Repository} from "./Repository";

export const UserPage = () => {
    return (
        <div className='userPage'>
           <div style={{border: '1px solid'}}>
               <img style={{width: '280px', height: '280px', borderRadius: '140px'}} src={user} alt=""/>
               <h4>Dan Abramov</h4>
               <p>gaearon</p>
               <span>65.8k followers</span> <span>171 following</span>
           </div>
            <div className='repositories' style={{border: '1px solid'}}>
                <h1>Repositories (200)</h1>
                <Repository/>
                <Repository/>
                <Repository/>
                <Repository/>
            </div>
        </div>
    )
}

