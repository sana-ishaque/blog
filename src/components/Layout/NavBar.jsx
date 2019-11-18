import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';

export default function NavBar() {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Sana</Link>
                <SignedInLink />
                <SignedOutLink />
            </div>
        </nav>
    )
}
