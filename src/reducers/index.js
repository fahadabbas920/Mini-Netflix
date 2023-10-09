import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import myListReducer from "./myListReducer";
import bgRefReducer from "./bgRefReducer";
import notificationReducer from "./notificationReducer";

// console.log(movieReducer);
// console.log(myListReducer);

const allReducers = combineReducers({
  movieArray: movieReducer,
  myList: myListReducer,
  bgRefReducer: bgRefReducer,
  notify: notificationReducer,
});

export default allReducers;
