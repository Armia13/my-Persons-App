import React from 'react';
import './Persons.css';
import Person from './Person/Person';

const Persons = () => {
    const personsData = [
        {
            "name": "Saba",
            "age": 25,
            "description": "Freelancer at Upwork",
            "isEditMode": false,

        },
        {
            "name": "Javeria",
            "age": 24,
            "description": "Teacher",
            "isEditMode": false,
        },
        {
            "name": "Zara",
            "age": 26,
            "description": "Fashion Designer",
            "isEditMode": false,
        }
    ]
    let turnOnEdit = () => {
        alert('Edit is true')
    }
    return (
        <div className="Persons">
            <h1>Persons</h1>

            {/* <Person isEditMode={true} />
           <Person isEditMode={false}/> */}
            {
                personsData.map(person =>
                    <Person person={person} allowedit={turnOnEdit} />)
            }

        </div>
    );
};

export default Persons;