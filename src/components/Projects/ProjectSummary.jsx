import React from 'react';
import Card from 'react-bootstrap/Card';
import './ProjectSummary.css'


export default function ProjectSummary({project}) {
    return (
        <Card style={{ width: '40rem' }}>
        <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <p>Posted by Sana</p>
            <p className="posting-date">19 November</p>
        </Card.Body>
    </Card>
    )
}
