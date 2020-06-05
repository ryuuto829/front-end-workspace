import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => {
  console.log(todos)
  return (
    <ul>
      {todos && todos.map((el) => <TodoItem {...el} />)}
    </ul>
  ); 
} 

export default TodoList;
