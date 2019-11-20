import React, { Component } from 'react'

export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastname: ''

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
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5>Sign UP</h5>
                    <div className="input-field">
                        <label for="email">Email</label>
                        <input type='email' id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label for="password">Password</label>
                        <input type='password' id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label for="firstName">First Name</label>
                        <input type='firstName' id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label for="lastName">Last Name</label>
                        <input type='lastName' id="lastName" onChange={this.handleChange} />
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right"></i>
                    </button>
                </form>
            </div >
        )
    }
}


