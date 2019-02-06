import { combineReducers } from "redux";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";
import { reducer as reduxFormReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer, // redux-form 指定用state.form，如果要取別的名字要另外設定
  surveys: surveysReducer
});
