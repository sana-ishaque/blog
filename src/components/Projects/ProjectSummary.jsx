import React from 'react';
import Card from 'react-bootstrap/Card';


export default function ProjectSummary() {
    return (
        <Card style={{ width: '26rem' }}>
        <Card.Body>
            <Card.Title>Story Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <p>Posted by Sana</p>
            <p className="posting-date">19 November</p>
        </Card.Body>
    </Card>
    )
}
