import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import myListReducer from "./myListReducer";
import bgRefReducer from "./bgRefReducer";

// console.log(movieReducer);
// console.log(myListReducer);

const allReducers = combineReducers({
  movieArray: movieReducer,
  myList: myListReducer,
  bgRefReducer: bgRefReducer,
});

export default allReducers;
