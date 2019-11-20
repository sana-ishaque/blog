import React, { Component } from 'react';

export default class CreateProject extends Component {

    constructor() {
        super();
        this.state = {
            tittle: '',
            content: ''
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

            <div className="container signup" >
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Write a blog.</h5>
                    <div className="input-field">
                        <label for="title">Title</label>
                        <input type="text" id='title' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label for="content">Description</label>
                        <textarea id="content"  className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>

        )
    }
}

