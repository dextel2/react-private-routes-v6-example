import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
import { createReduxHistoryContext } from "redux-first-history";
import authReducer from "./auth/authReducer";

const { routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});
const rootReducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
});
export default rootReducer;
