import { createStore } from 'redux';
import mainReducer from '../reducers/index';

export const initialState = {
  favouriteJobs: [],
};

const configureStore = () =>
  createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default configureStore;

// works
// mainReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//does not work
// mainReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__());
