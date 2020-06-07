import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todoByID: {
    "1oxjsne033z": {
      text: "Example todo task 1",
      completed: false
    },
    "24sbzl91yz0": {
      text: "Example todo task 2",
      completed: false
    },
  },
  todoAllIDs: ["24sbzl91yz0", "1oxjsne033z"],
  isAddTodoDown: false,
  isCompletedTodoDown: false,
  activeVisibilityFilter: "SHOW_ALL"
};

const addTodo = (state, action) => {
  let allIDList;

  if (state.isAddTodoDown) {
    allIDList = [...state.todoAllIDs, action.id];
  } else {
    allIDList = [action.id, ...state.todoAllIDs];
  }

  return {
    ...state,
    todoByID: {
      ...state.todoByID,
      [action.id]: {
        id: action.id,
        text: action.text,
        completed: false
      }
    },
    todoAllIDs: allIDList
  }
};

const toggleTodo = (state, action) => {
  return {
    ...state,
    todoByID: {
      ...state.todoByID,
      [action.id]: {
        ...state.todoByID[action.id],
        completed: !state.todoByID[action.id].completed
      }
    },
    todoAllIDs: [...state.todoAllIDs]
  }
};

const removeTodo = (state, action) => {
  return {
    ...state,
    todoByID: {
      ...state.todoByID,
      [action.id]: undefined
    },
    todoAllIDs: [...state.todoAllIDs.filter(item => item !== action.id)]
  }
};

const toggleAddTodoPosition = state => {
  return {
    ...state,
    todoByID: {
      ...state.todoByID,
    },
    todoAllIDs: [...state.todoAllIDs],
    isAddTodoDown: !state.isAddTodoDown
  }
};

const moveCompletedTodo = state => {
  return {
    ...state,
    todoByID: {
      ...state.todoByID,
    },
    todoAllIDs: [...state.todoAllIDs],
    isCompletedTodoDown: !state.isCompletedTodoDown
  }
};

const changeVisibilityFilter = (state, action) => {
  return {
    ...state,
    todoByID: {
      ...state.todoByID,
    },
    todoAllIDs: [...state.todoAllIDs],
    activeVisibilityFilter: action.filter
  }
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return addTodo(state, action);
    case actionTypes.TOGGLE_TODO:
      return toggleTodo(state, action);
    case actionTypes.REMOVE_TODO:
      return removeTodo(state, action);
    case actionTypes.TOGGLE_DISPLAY_ORDER:
      return toggleAddTodoPosition(state);
    case actionTypes.MOVE_COMPLETED_TODO:
      return moveCompletedTodo(state);
    case actionTypes.CHANGE_VISIBILITY_FILTER:
      return changeVisibilityFilter(state, action);
    default:
      return state;
  }
};

export default todos;