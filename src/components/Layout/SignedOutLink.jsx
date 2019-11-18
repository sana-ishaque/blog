import React from 'react';
import {NavLink} from 'react-router-dom';
// import './SignedInLink.css'

export default function SignedOutLink() {
    return (
        <ul className="right">
            <li><NavLink to="/">SignUp</NavLink></li>
            <li><NavLink to="/">Log In</NavLink></li>

        </ul>
    )
}

