import React from 'react';

import TodoContainer from '../layouts/TodoContainers/TodoContainer';
import AddTodo from '../components/todo/AddTodo';
import TodoList from '../components/todo/TodoList';
import VisibilityFilters from '../components/todo/VisibilityFilters';

class TodoApp extends React.Component {
  render() {
    return (
      <TodoContainer>
        <span>Todo App</span>
        <AddTodo />
        <hr />
        <TodoList />
        <VisibilityFilters />
      </TodoContainer>
    );
  }
};

export default TodoApp;