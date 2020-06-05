import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  listOfIDs: [],
  todos: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, text } = action.payload;
      return {
        ...state,
        listOfIDs: [...state.listOfIDs, id],
        todos: {
          ...state.todos,
          [id]: {
            text,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: {
          ...state.todos,
          [id]: {
            ...state.todos[id],
            completed: !state.todos[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
