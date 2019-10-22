import { combineReducers } from 'redux';

import rightMenuReducer from "./rightMenuReducer.js";
import leftMenuReducer from "./leftMenuReducer.js";
import navReducer from "./navReducer.js";

const reducer = combineReducers({
  rightMenuReducer,
  leftMenuReducer,
  navReducer
});

export default reducer;