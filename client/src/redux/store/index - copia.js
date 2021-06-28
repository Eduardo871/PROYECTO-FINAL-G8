
import { createStore, applyMiddleware, compose } from "redux";
import combineReducer from "../reducer/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  combineReducer,
  composeEnhancers(
    
    applyMiddleware(thunk)
  )
);

export default store;