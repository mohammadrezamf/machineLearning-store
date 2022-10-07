import { combineReducers } from "redux";
import { coursesReducer } from "./courseSlice.js";

export const reducer = combineReducers({
  courses: coursesReducer,
});

export default reducer;
