import { combineReducers } from "node_modules/redux";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
