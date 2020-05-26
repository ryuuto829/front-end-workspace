import React from 'react';
import styles from './Key.module.css'

const key = props => {
  return (
    <div
      className={styles.Key}
      data-octave="0"
      data-note={props.frequency}></div>
  )
};
// onMouseDown={props.pressedKey}
// onMouseUp={props.releasedKey}

export default key;
