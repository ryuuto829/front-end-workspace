import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from '../../redux/actions';

class AddTodo extends Component {
  state = {
    inputText: ''
  }

  changeInputTextHandler = text => {
    this.setState({ inputText: text });
  }

  addTodoHandler = () => {
    addTodo(this.state.inputText);
  }

  render() {
    return (
      <form onSubmit={e =>{
        e.preventDefault();
        this.props.dispatch(addTodo(this.state.inputText));
        this.setState({inputText: ''})
      } }>
        <input
          onChange={e => this.changeInputTextHandler(e.target.value)}
          value={this.state.inputText}
          type="text"
          placeholder="Type a new todo task .." />
        <button
          onClick={this.addTodoHandler}>Add</button>
      </form>
    )
  }
}

export default connect()(AddTodo);