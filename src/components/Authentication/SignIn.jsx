import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''

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

            <Form>
                <h5>Create a Story</h5>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="email" onChange={this.handleChange}  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" onChange={this.handleChange}  />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>

        )
    }
}