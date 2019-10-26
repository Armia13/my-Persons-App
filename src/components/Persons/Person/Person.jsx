import React from 'react';
import './Person.css'
import PersonEdit from './PersonEdit';
import PersonInfo from './PersonInfo';
import PropType from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Person = (props) => {
    // let myComponent;
    // if (isEditMode) {
    //     myComponent = <PersonEdit />
    // } else {
    //     myComponent = <PersonInfo />
    // }
    return (
        <Card style={{ width: '18rem' }}>
            {props.person.isEditMode ? <PersonEdit person={props.person} /> : <PersonInfo person={props.person} />} 
            </Card>
    );
};

Person.propTypes = {
    person: PropType.object,
}

export default Person;