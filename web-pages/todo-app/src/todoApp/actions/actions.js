import { ADD_TODO } from './actionsTypes';

/** action creator for adding todo tasks */
let nextID = 0;
export const addTodo = text => (
  {
    type: ADD_TODO,
    id: ++nextID,
    text
  }
);