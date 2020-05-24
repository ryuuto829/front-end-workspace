import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const navigationItem = (props) => (
  <li className={styles.NavigationItem}>
    <NavLink
      activeClassName={styles.active}
      exact={props.exact}
      to={props.link}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;