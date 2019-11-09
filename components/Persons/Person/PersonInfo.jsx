import React from 'react';
import './PersonInfo.css'
import PropType from 'prop-types';
import { Button, Card, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
const PersonInfo = (props) => {
    return (
        <Card.Body >
            <Card.Title>{props.person.name}, {props.person.age}</Card.Title>
            <Card.Text>
                {props.person.description}
            </Card.Text>
            <ButtonGroup aria-label="Basic example">
                <Button onClick={props.editMe}  variant="light"><FontAwesomeIcon className="text-info" icon={faEdit} /></Button>
                <Button onClick={props.deletePerson} variant="light"><FontAwesomeIcon className="text-danger" icon={faTrash} /></Button>
            </ButtonGroup>
        </Card.Body>
    );
};

export default PersonInfo;
PersonInfo.propTypes = {
    person: PropType.object,
    editMe: PropType.func,
    deletePerson : PropType.func,
}