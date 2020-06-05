import { ADD_TODO } from '../actions/actionsTypes';

const initialState = {
  byId: {
    testId: {
      id: "testId",
      text: "testText",
      completed: false
    },
    testId2: {
      id: "testId2",
      text: "testText2",
      completed: false
    }
  },
  allId: ["testId", "testId2"]
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return ({
        byId: {
          ...state.byId,
          [action.id]: {
            id: action.id,
            text: action.text,
            completed: false
          }
        },
        allId: [...state.allId, action.id]
      });
    default:
      return state;
  }
};

export default todo;