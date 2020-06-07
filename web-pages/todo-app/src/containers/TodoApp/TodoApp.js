import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  toggleTodo,
  removeTodo,
  toggleAddTodoPosition,
  moveCompletedTodo,
  changeVisibilityFilter
} from '../../store/actions/index';
import { VISIBILITY_FILTERS } from '../../store/utilities';

class TodoApp extends Component {
  state = {
    todoInputText: ''
  }

  updateTodoInputTextHandler = e => {
    this.setState({ todoInputText: e.target.value })
  }

  submitTodoHandler = e => {
    e.preventDefault();
    const text = this.state.todoInputText;

    if (text.trim().length > 0) {
      this.props.addTodo(text);
    }

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
        let visibility = [];

        switch (this.props.activeVisibilityFilter) {
          case VISIBILITY_FILTERS.all:
            visibility = ["block", "block"];
            break;
          case VISIBILITY_FILTERS.complete:
            visibility = ["block", "none"];
            break;
          case VISIBILITY_FILTERS.uncomplete:
            visibility = ["none", "block"];
            break;
          default:
            visibility = ["block", "block"];
            break;
        };

        return (
          <li key={id}
            style={{
              display: `${todo.completed ? visibility[0] : visibility[1]}`,
              color: `${todo.completed ? "red" : "blue"}`,
              border: "1px solid #ccc",
              margin: "5px"
            }}>
            <span onClick={() => this.onCompleteTodoHandler(id)}>{todo.text}</span>
            <div onClick={() => this.removeTodoHandler(id)}>delete</div>
          </li>
        )
      });
    }
    return todoList;
  }

  changeVisibilityFilterHandler = filter => {
    if (this.props.activeVisibilityFilter !== VISIBILITY_FILTERS[filter]) {
      this.props.changeVisibilityFIlter(VISIBILITY_FILTERS[filter]);
    }
  }

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

    const filterButtons = Object.keys(VISIBILITY_FILTERS).map(filter => {
      const active = this.props.activeVisibilityFilter === VISIBILITY_FILTERS[filter];
      return (
        <button
          style={{ color: `${active ? "red" : "black"}` }}
          onClick={() => this.changeVisibilityFilterHandler(filter)}
          key={filter}> {filter}</button >
      );
    });

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
        <div>
          {filterButtons}
        </div>
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
    isCompletedTodoDown: todos.isCompletedTodoDown,
    activeVisibilityFilter: todos.activeVisibilityFilter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id)),
    toggleAddTodoPosition: () => dispatch(toggleAddTodoPosition()),
    moveCompletedTodo: () => dispatch(moveCompletedTodo()),
    changeVisibilityFIlter: filter => dispatch(changeVisibilityFilter(filter))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);