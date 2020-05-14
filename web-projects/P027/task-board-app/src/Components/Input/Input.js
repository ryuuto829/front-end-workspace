import React from 'react';
import styles from './Input.module.css';


class Input extends React.Component {
  render() {

    return (
      <div>
        <input className={styles.input} type="text" />
      </div>
    )
  }
}

export default Input;
