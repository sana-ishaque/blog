import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';
import './NavBar.css';
import { connect } from 'react-redux'

const NavBar = () => {
    return (
        <nav >
            <div className="container">
                <Link to='/' className="logo" >INSCRIBE</Link>
                <SignedInLink />
            </div>
        </nav>
    )
}

function mapStateToProps(state) {
    console.log(state);
    return{}
}

export default connect(mapStateToProps)(NavBar);
// <nav>
// <div class="nav-wrapper">
//     <a href="#" class="brand-logo">Blog</a>
//     <SignedOutLink />
//     <SignedOutLink />

// </div>
// </nav>
