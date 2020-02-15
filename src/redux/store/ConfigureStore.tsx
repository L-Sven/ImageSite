import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/Root.Reducer";

const logger = createLogger({
  collapsed: true
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
