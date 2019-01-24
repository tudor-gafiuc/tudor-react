import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: '2fds2', name: 'Max', age: 28 },
      { id: '54gsd', name: 'Test', age: 29 },
      { id: 'rswe3', name: 'Test2', age: 30 },
      { id: 'rsw23', name: 'Test3', age: 23 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}

        </div>
      );

      btnClass = classes.Red;

    }

    const appClasses = [];

    if (this.state.persons.length <= 2) {
      appClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      appClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>

        <h1>Hello</h1>
        <p className={appClasses.join(' ')}>Hau miau 2</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle</button>
        {persons}

      </div>
    );
  }
}

export default App;
