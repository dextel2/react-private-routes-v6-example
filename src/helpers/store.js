import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../store/reducers";
import { watchAuth } from "../store/sagas/index";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({
  history: createBrowserHistory(),
  oldLocationChangePayload: true,
});
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware];
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
const persistor = persistStore(store);
sagaMiddleware.run(watchAuth);

export const history = createReduxHistory(store);
export default store;
export { persistor };
