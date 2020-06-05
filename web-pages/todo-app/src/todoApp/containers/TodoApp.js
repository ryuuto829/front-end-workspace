import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

class TodoApp extends Component {
  state = {
    input: ''
  }

  changeInputHandler = text => {
    this.setState({ input: text });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addNewTodod(this.state.input);
    this.setState({ input: '' })
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <form
          onSubmit={this.submitHandler}>
          <input
            value={this.state.input}
            onChange={e => this.changeInputHandler(e.target.value)}
            type="text" placeholder="New Todo .." />
          <button>Add Todo</button>
        </form>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { byId, allId } = state || {};
  const todos = (
    allId && allId.length ?
      allId.map(id => byId ? { ...byId[id], id } : null) :
      null
  );
  return { todos };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewTodod: text => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
