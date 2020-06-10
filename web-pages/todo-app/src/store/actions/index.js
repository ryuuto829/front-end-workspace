import * as actionTypes from './actionTypes';
import { generateID } from '../utilities';

export { auth } from './auth';

/** actions creators */

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  id: generateID(),
  text
});

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  id: id
});

export const removeTodo = id => ({
  type: actionTypes.REMOVE_TODO,
  id: id
});

export const toggleAddTodoPosition = () => ({
  type: actionTypes.TOGGLE_DISPLAY_ORDER
});

export const moveCompletedTodo = () => ({
  type: actionTypes.MOVE_COMPLETED_TODO
});