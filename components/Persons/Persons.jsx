import React, { Component } from 'react';
import './Persons.css';
import Person from './Person/Person';

export default class Persons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personsData: [
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
        }
    }
    turnOnEdit = (personClicked) => {
        this.setState({
            personsData: this.state.personsData.map(personsClickedInner => {
                if (personsClickedInner.name === personClicked.name) {
                    personsClickedInner.isEditMode = true;
                }
                return personsClickedInner;
            })
        })
    }

    deletePerson = (personClicked) => {
        this.setState({
          personsData: this.state.personsData.filter(function (person) {
            return person.name !== personClicked.name
          }
          )
        })
      }

    render() {
        return (
            <div className="Persons">
                <h1>Persons</h1>

                { this.state.personsData.map(person =>
                        <Person person={person} allowedit={() => this.turnOnEdit(person)} deletePerson={() => this.deletePerson(person)}/>)
                }

            </div>
        );
    }
}
