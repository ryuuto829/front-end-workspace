import React from 'react';
import styles from './Key.module.css'

const key = (props) => {
  return (
    <div 
    className={styles.Key}
    onMouseDown={props.pressedKey}
    onMouseUp={props.releasedKey}
    data-octave="0"
    data-note={props.frequency}>C#</div>
  )
};

export default key;
