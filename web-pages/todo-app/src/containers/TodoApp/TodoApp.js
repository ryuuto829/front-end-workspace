import React from 'react';

import TodoControl from './TodoControl/TodoControl';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';

const todoApp = () => {
  return (
    <div>
      <h1>My Todo App</h1>
      <AddTodo />
      <TodoList />
      <TodoControl />
    </div >
  );
};

export default todoApp;