import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  toggleTodo,
  removeTodo,
  toggleAddTodoPosition,
  moveCompletedTodo
} from '../../store/actions/index';

class TodoApp extends Component {
  state = {
    todoInputText: ''
  }

  updateTodoInputTextHandler = e => {
    this.setState({ todoInputText: e.target.value })
  }

  submitTodoHandler = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoInputText);
    this.setState({ todoInputText: '' })
  }

  onCompleteTodoHandler = (id) => {
    this.props.toggleTodo(id);
  }

  removeTodoHandler = id => {
    this.props.removeTodo(id);
  }

  changeAddTodoPositionHandler = () => {
    this.props.toggleAddTodoPosition();
  }

  moveCompletedTodoHandler = () => {
    this.props.moveCompletedTodo();
  }

  /** Map list of ids to <li> items */
  createTodoList = list => {
    let todoList = null;

    if (list.length) {
      todoList = list.map(id => {
        const todo = this.props.todoList[id];
        return (
          <li key={id}
            style={{ color: `${todo.completed ? "red" : "blue"}` }}>
            <span onClick={() => this.onCompleteTodoHandler(id)}>{todo.text}</span>
            <div onClick={() => this.removeTodoHandler(id)}>delete</div>
          </li>
        )
      });
    }
    return todoList;
  };

  render() {
    let todos = null;

    if (this.props.isCompletedTodoDown) {
      const completed = [];
      const uncompleted = [];

      this.props.todoOrder.forEach(id => {
        const todo = this.props.todoList[id];
        if (todo.completed) {
          return completed.push(id);
        }
        return uncompleted.push(id);
      });

      /** display two separate lists with todos */
      todos = (
        <Fragment>
          <ul style={{ backgroundColor: "#eee" }}>
            {this.createTodoList(uncompleted)}
          </ul>
          <ul style={{ backgroundColor: "#ccc" }}>
            {this.createTodoList(completed)}
          </ul>
        </Fragment>
      );

    } else {

      /** display all todos in one list */
      todos = (
        <ul style={{ backgroundColor: "#eee" }}>
          {this.createTodoList(this.props.todoOrder)}
        </ul>
      );
    }

    return (
      <div>
        <h1>My Todo App</h1>
        <form
          onSubmit={this.submitTodoHandler}>
          <input
            type="text"
            value={this.state.todoInputText}
            onChange={this.updateTodoInputTextHandler} />
          <button>Add todo</button>
        </form>
        {todos}
        <button
          onClick={this.changeAddTodoPositionHandler}>
          {this.props.isAddTodoDown ? "Change to add todo on start" : "Change to add todo on end"}
        </button>
        <button
          onClick={this.moveCompletedTodoHandler}>
          {this.props.isCompletedTodoDown ? "Return completed todo back" : "Move completed todo down"}
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { todos } = state;
  return {
    todoList: todos.todoByID,
    todoOrder: todos.todoAllIDs,
    isAddTodoDown: todos.isAddTodoDown,
    isCompletedTodoDown: todos.isCompletedTodoDown
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id)),
    toggleAddTodoPosition: () => dispatch(toggleAddTodoPosition()),
    moveCompletedTodo: () => dispatch(moveCompletedTodo())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);