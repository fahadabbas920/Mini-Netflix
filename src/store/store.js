import { createStore } from "redux";
import movieReducer from "../reducers/movieReducer";

// console.log(movieReducer)
const store = createStore(movieReducer);
export default store;
