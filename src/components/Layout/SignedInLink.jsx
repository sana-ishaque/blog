import React from 'react';
import { NavLink } from "react-router-dom";

export default function SignedInLink() {
    return (
        <ul className="right">
            <li><NavLink to="/create">New story</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn-floating ">SS</NavLink></li>

        </ul>
    )
}

