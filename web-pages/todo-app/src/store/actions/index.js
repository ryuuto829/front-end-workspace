import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, TOGGLE_DISPLAY_ORDER, MOVE_COMPLETED_TODO } from './actionTypes';
import { generateID } from '../utilities';

/** actions creators */

export const addTodo = text => ({
  type: ADD_TODO,
  id: generateID(),
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id: id
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id: id
});

export const toggleAddTodoPosition = () => ({
  type: TOGGLE_DISPLAY_ORDER,
});

export const moveCompletedTodo = () => ({
  type: MOVE_COMPLETED_TODO,
});