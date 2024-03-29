import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import './CreateProject.css'

class CreateProject extends Component {

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
        this.props.createProject(this.state)
    }
    render() {
        return (
            <div className="container-signup" >
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5>Create a Story</h5>
                    <div className="input-field">
                        <label for="title">Title</label>
                        <input type="text" id='title' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label for="content">Description</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn">Create</button>
                    </div>
                </form>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(null, mapDispatchToProps)(CreateProject);