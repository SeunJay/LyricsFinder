import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from "./reducers";

const middleware = applyMiddleware(thunk, promise);
const enhancer = composeWithDevTools(middleware);
const store = createStore(rootReducer, enhancer);

export default store;
