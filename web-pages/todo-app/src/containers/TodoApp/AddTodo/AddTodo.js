import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../../store/actions/index';

import TextField from '../../../components/TextField/TextField';

class AddTodo extends Component {
  state = {
    todoInputText: ''
  }

  submitTodoHandler = e => {
    e.preventDefault();
    const text = this.state.todoInputText;

    if (text.trim().length > 0) {
      this.props.addTodo(text);
    }

    this.setState({ todoInputText: '' });
  }

  updateTodoInputTextHandler = e => {
    this.setState({ todoInputText: e.target.value });
  }

  render() {
    return (
      <TextField
        submitedForm={this.submitTodoHandler}
        currentValue={this.state.todoInputText}
        changed={this.updateTodoInputTextHandler} />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};