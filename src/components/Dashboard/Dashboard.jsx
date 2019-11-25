import React, { Component } from 'react'
import Notifications from './Notifications'
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

function mapStateToProps(state) {
    console.log(state);

}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'stories' }
    ])
)(Dashboard)

//  <div className="project-notif">
//                     <Notifications />
//                 </div>