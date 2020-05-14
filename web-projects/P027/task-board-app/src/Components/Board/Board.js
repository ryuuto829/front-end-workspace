import React from 'react';
import styles from './Board.module.css';
import IconButton from '../IconButton/IconButton';
import Input from '../Input/Input';

class Board extends React.Component {
  render() {

    return (
      <div className={styles.board}>
        <h2>Currently doing</h2>
        <form>
          <Input />
          <IconButton />
        </form>
      </div>
    )
  }
}

export default Board;