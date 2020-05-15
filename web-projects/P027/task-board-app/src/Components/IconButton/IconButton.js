import React from 'react';
import styles from './IconButton.module.css';

function IconButton(props) {
    let btn;

    if (props.name === 'edit') {
      btn = (
        <svg
          className={styles.editLogo}
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
          </path>
        </svg>
      );
    }

    if (props.name === 'menu') {
      btn = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      );
    }

    return (
      <button className={styles.iconButton}>
        {btn}
      </button>
    )
}

export default IconButton;