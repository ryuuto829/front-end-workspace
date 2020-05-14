import React from 'react';
import styles from './Board.module.css';
import IconButton from '../IconButton/IconButton';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saveTitle: 'Currently doing!',
      titleName: 'Currently doing!',
      isEditable: false,
      isHovering: false,
      titleLength: 25
    };
  }

  closeInput(e) {
    const string = e.target.value;
    if (string) {
      this.setState({
        saveTitle: string,
      });
    } else {
      this.setState({
        titleName: this.state.saveTitle
      });
    }

    this.setState({
      isEditable: false
    });
  }

  toggleHoverHandler = () => {
    this.setState({
      isHovering: !this.state.isHovering
    });
  }

  iconClickHandler = () => {
    this.setState({
      isEditable: true
    });
  }

  inputHandler = e => {
    this.setState({
      titleName: e.target.value
    });
  }

  inputSubmitHandler = e => {
    if (e.key === 'Enter') {
      this.closeInput(e);
    }
  }

  inputBlurHandler = e => {
    this.closeInput(e);
  }

  render() {
    let headerTitle;
    let iconBtn = null;

    if (this.state.isEditable) {
      headerTitle = <input
        autoFocus
        className={styles.input}
        type="text"
        value={this.state.titleName}
        onChange={this.inputHandler}
        onKeyDown={this.inputSubmitHandler}
        onBlur={this.inputBlurHandler}
        maxLength={this.state.titleLength} />
    } else {
      headerTitle = <h2 className={styles.title}>{this.state.saveTitle}</h2>
    }

    if (this.state.isHovering && !this.state.isEditable) {
      iconBtn = (
        <div onClick={this.iconClickHandler}>
          <IconButton />
        </div>
      );
    }

    return (
      <div className={styles.board}>
        <header
          className={styles.header}
          onMouseEnter={this.toggleHoverHandler}
          onMouseLeave={this.toggleHoverHandler}>
          {headerTitle}
          {iconBtn}
        </header>
      </div>
    )
  }
}

export default Board;