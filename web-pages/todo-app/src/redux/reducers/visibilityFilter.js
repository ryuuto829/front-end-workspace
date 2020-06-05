import { SET_FILTER, VISIBILITY_FILTERS } from '../actionTypes';

const initialState = VISIBILITY_FILTERS.SHOW_ALL;

const visibilityFilters = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filterName;
    }
    default:
      return state;
  }
};

export default visibilityFilters;