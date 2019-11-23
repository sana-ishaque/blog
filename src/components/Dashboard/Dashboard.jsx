import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../Projects/ProjectList'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import './Dashboard.css'

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

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}
export default connect(mapStateToProps)(Dashboard) 

//  <div className="project-notif">
//                     <Notifications />
//                 </div>