import React from 'react';
import './PersonEdit.css'
import PropType from 'prop-types';
import { Button, Card, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const PersonEdit = (props) => {
    return (
        <Card.Body >
            <Card.Title>Edit Person</Card.Title>
            <Card.Text>
                <input value={props.person.name} />
                <input type="number" value={props.person.age} />
                <textarea>{props.person.description}</textarea>
            </Card.Text>
            <ButtonGroup aria-label="Basic example">
                <Button variant="light"><FontAwesomeIcon className="text-info" icon={faCheck} /></Button>
                <Button onClick={props.disableEdit} variant="light"><FontAwesomeIcon className="text-danger" icon={faTimes} /></Button>
            </ButtonGroup>


        </Card.Body>
    );
};

export default PersonEdit;
PersonEdit.propTypes = {
    person: PropType.object,
    disableEdit: PropType.object,
}