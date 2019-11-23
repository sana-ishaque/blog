import React from 'react';
import { NavLink } from "react-router-dom";
import './SignedInLink.css'

export default function SignedInLink() {
    return (
        <ul className="right">
            <li><NavLink to="/create">New story</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn-floating">SS</NavLink></li>

        </ul>
    )
}

