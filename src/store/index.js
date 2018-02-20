import { bundle } from 'dwindler';
import { createStore } from 'redux';
import { connect as reduxConnect } from 'react-redux';
import root from './app';

const app = bundle(root);
const store = createStore(
  app.reducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
export const actions = app.getActions(store);
export const connect = mapStateAndActionsToProps =>
  reduxConnect((state, props) =>
    mapStateAndActionsToProps(state, props, actions),
  );
