import { combineReducers } from "redux";
import heroes from "./superhero.reducer";

const rootReducer = combineReducers({
  heroes
});

export default rootReducer;
