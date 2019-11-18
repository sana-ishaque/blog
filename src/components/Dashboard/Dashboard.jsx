import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../Projects/ProjectList'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardContainer">
                <div className="project-list">
                    <ProjectList />
                </div>
                <div className="project-notif">
                    <Notifications />
                </div>
            </div>
        )
    }
}
