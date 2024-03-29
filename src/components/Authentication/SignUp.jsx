import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }



    render() {
        return (

            <div className="container signup" style={{width:'100%'}} >
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5>Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button class= "btn">Sign Up</button>
                    </div>
                </form>
            </div>

        )
    }
}
