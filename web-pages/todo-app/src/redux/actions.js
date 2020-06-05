import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';

/** Action creators */
let nextTodoItemID = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoItemID,
    text
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filterName => ({
  type: SET_FILTER,
  payload: { filterName }
});