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

import TodosContainer from '../../layouts/TodosContainer/TodosContainer';
import DummyContainer from '../../layouts/DummyContainer/DummyContainer';
import TextField from '../../components/TextField/TextField';
import TodoItem from '../../components/TodoItem/TodoItem';
import Checkbox from '../../components/Checkbox/Checkbox';
import TodoList from '../../components/TodoList/TodoList';
import ListDivider from '../../components/ListDivider/ListDivider';

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

  changeVisibilityFilterHandler = filter => {
    if (this.props.activeVisibilityFilter !== VISIBILITY_FILTERS[filter]) {
      this.props.changeVisibilityFIlter(VISIBILITY_FILTERS[filter]);
    }
  }

  onDragEnd = () => {
    console.log('da')
    // the only one that is required
  };

  /** Map list of ids to <li> items */
  createTodoList = list => {
    let todoList = null;

    if (list.length > 0) {
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
          <TodoItem
            key={id}
            deleted={() => this.removeTodoHandler(id)}>
            <Checkbox
              checked={todo.completed}
              id={id}
              completed={todo.completed}
              text={todo.text}
              clicked={() => this.onCompleteTodoHandler(id)} />
          </TodoItem>
        );
      });
    }
    return todoList;
  }

  /**
   *  Sorting and group together ids of todos
   *  isSpliting = condition whether list should be splited or not
   *  generalTodoList = list of all todos ids
   */

  sortTodoItems = (isSpliting, generalTodoList) => {
    if (!this.props.todoOrder.length) return null;
    if (isSpliting) {
      const completed = [];
      const uncompleted = [];

      generalTodoList.forEach(id => {
        const todo = this.props.todoList[id];
        if (todo.completed) {
          return completed.push(id);
        }
        return uncompleted.push(id);
      });
      return [uncompleted, completed];
    } else {
      return [generalTodoList];
    }
  }

  /**
   *  Display two separate lists with todos or one general list
   *  todos = array of ids [uncompleted,completed] or [general]
   */

  groupTodoItems = (todos) => {
    let id = 0;

    if (todos) {
      return todos.map(list => {
        let divider = null;

        if (id === 1 && list.length !== 0) {
          divider = <ListDivider>Completed Todos</ListDivider>;
        }
        return (
          <Fragment key={++id}>
            {divider}
            <TodoList show={list.length !== 0} >
              {this.createTodoList(list)}
            </TodoList>
          </Fragment>
        );
      });
    }
    return (
      <DummyContainer>The ToDo List is empty</DummyContainer>
    );
  }

  render() {
    /** generale list of todos */
    const todos = this.groupTodoItems(
      this.sortTodoItems(
        this.props.isCompletedTodoDown,
        this.props.todoOrder)
    );

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
        <TextField
          submitedForm={this.submitTodoHandler}
          currentValue={this.state.todoInputText}
          changed={this.updateTodoInputTextHandler} />
        <TodosContainer>
          {todos}
        </TodosContainer>
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
      </div >
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