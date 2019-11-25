import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authanticationAction'


class SignIn extends Component {
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
        // console.log(this.state);
        this.props.signIn(this.state)
    }

    render() {
        return (

            <Form>
                <h5>Sign In</h5>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="email" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(null, mapDispatchToProps)(SignIn)

