import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const appClasses = [];
    let btnClass = '';

    if(props.showPersons){
      btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      appClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      appClasses.push(classes.bold);
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>Hello</h1>
            <p className={appClasses.join(' ')}>Hau miau 3</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle</button>
        </div>
          );
};

export default cockpit;