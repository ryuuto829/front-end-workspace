import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  generateID = () => {
    return `${+(new Date()) + Math.random()}`;
  };

  test = e => {
    this.setState({
      text: e.target.value
    });
  };

  click = () => {
    this.setState({
      text: 'delete'
    })
  };

  render() {
    let text = null;
    let len = 'short';
    const textLen = this.state.text.length;

    if (textLen) {
      text = <div className="styled-text">{this.state.text}</div>

      if (textLen < 5) {
        len = 'short';
      } else {
        len = 'long';
      }
    }

    const list = Array.from(this.state.text);

    const listItems = list.map(el => {
      let value = el;

      if (el === ' ') {
        value = '_'
      }
      return <span className="char" key={this.generateID()}>{value}</span>
    });

    return (
      <div className="container">
        <h1>Small app using React</h1>
        <p>Type some text in the input field below:</p>
        <input type="text" className="input" onChange={this.test} value={this.state.text} />
        <span>Text is too {len}</span>
        {text}
        <div onClick={this.click}>
          {listItems}
        </div>
      </div>
    )
  }
}