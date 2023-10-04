import { createStore } from "redux";
// import movieReducer from "../reducers/movieReducer";
// import allReducers from "../reducers";
import allReducers from "../reducers";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
