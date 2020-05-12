import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Dima', age: 22 }
    ]
  });

  const switchNameHandler = () => {
    console.log('clicked');

    setPersonState({
      persons: [
        { name: 'Dmytro', age: 22 },
        { name: 'Dan', age: 30 },
        { name: 'Anna', age: 26 }
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hello people!</h1>
      <p>Some text here ...</p>
      <button onClick={switchNameHandler}>Switch the name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        click={switchNameHandler}>
        I the only real one here!</Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age} />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age} />
    </div>
  );
}

export default App;
