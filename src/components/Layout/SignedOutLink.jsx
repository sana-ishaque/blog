import React from 'react';
import {NavLink} from 'react-router-dom';
// import './SignedInLink.css'

export default function SignedOutLink() {
    return (
        <ul className="right">
            <li><NavLink to="/signup">SignUp</NavLink></li>
            <li><NavLink to="/signin">Log In</NavLink></li>
        </ul>
    )
}

