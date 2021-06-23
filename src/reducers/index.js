import { initialState } from '../store';

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_JOB_TO_FAVOURITES':
      return {};
    default:
      return state;
  }
};

export default mainReducer;
