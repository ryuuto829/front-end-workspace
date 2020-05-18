import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Toolabar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';

const layout = props => (
  <Aux>
    <Toolabar />
    <main className={styles.content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;