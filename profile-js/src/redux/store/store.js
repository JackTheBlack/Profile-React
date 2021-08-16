import { createStore, combineReducers } from "redux";
import counterReducer from "../reducer/counterReducer.js";

const appReducer = combineReducers({
  counterReducer: counterReducer,
});

export default createStore(appReducer);
