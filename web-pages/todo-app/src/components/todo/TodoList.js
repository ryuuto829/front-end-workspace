import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    <TodoItem />
    <TodoItem />
    <TodoItem />
  </ul>
);

export default TodoList;
