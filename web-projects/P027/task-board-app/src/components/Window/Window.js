import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './Window.module.css';

class Window extends React.Component {

  state = {
    text: ''
  }

  updateS = (e) => {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className={styles.wrap}>
        <textarea
          type="text"
          className={styles.raw}
          value={this.state.text}
          onChange={this.updateS} />
        <div className={styles.formatted}>
          <ReactMarkdown source={this.state.text} />
        </div>
      </div>
    );
  }
};

export default Window;