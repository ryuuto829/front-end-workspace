import React from 'react';
import styles from './Person.module.css';

const Person = (props) => {
  let name = <span className={styles.itemName}>{props.name}</span>;

  if (true) {
    name = (
      <input
        value={props.name}
        onChange={e => props.changeName(e)} />);
  }

  return (
    <li
      className={styles.item}
      id={props.id}
      onClick={e => props.deleteItem(e)}>
      {name}
      <span className={styles.itemInfo}>{props.job}, {props.age} y.o.</span>
    </li>
  );
}

export default Person;