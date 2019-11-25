import React, { Component } from 'react'
import ProjectList from '../Projects/ProjectList'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import './Dashboard.css';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        console.log(this.props)
        const { projects } = this.props;
        return (
            <div className="dashboardContainer">
                <div className="project-list">
                    <ProjectList projects={projects} />
                </div>
            </div>
        )
    }
}


export default Dashboard;

//  <div className="project-notif">
//                     <Notifications />
//                 </div>