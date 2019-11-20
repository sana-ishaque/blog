import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="projectDetailContainer">
            <div className="projectDetailTitle">Project Title - {id}</div>
            <div className="projectDetailContent">
                <p>lorem Ipsum</p></div>
            <div className="projectDetailAuthor">Posted By Sana Ishaque</div>
            <div className="projectDetailDate">20th November 2019</div>
        </div>
    )
}
