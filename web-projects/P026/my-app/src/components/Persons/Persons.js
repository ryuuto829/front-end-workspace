import React from 'react';

import styles from './Persons.module.css';
import Person from './Person/Person';

const Persons = (props) => {

  // 1. Toggle btn style & action
  let personList = null;
  const classesBtn = [styles.toggleBtn];

  if (props.showed) {
    classesBtn.push(styles.toggleBtn_active);
    let count = -1;

    const list = props.people.map(person => {
      count++;
      return (<Person
        id={count}
        key={count}
        name={person.name}
        age={person.age}
        job={person.job}
        changeName={props.changeName}
        deleteItem={props.deleteItem} />);
    });

    personList = <ul> {list} </ul>;

  } else {
    classesBtn.push(styles.toggleBtn_hidden);
  }

  return (
    <div>
      <button
        onClick={props.clicled}
        className={classesBtn.join(' ')}>
        Toggle names
    </button>
      {personList}
    </div>
  );
}

export default Persons;