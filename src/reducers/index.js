import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import myListReducer from "./myListReducer";

// console.log(movieReducer);
// console.log(myListReducer);

const allReducers = combineReducers({
  movieArray: movieReducer,
  myList: myListReducer,
});

export default allReducers;
