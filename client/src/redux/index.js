import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import pinterest from "./flickr";

const rootReducer = combineReducers({
      pinterest
})

export default createStore(rootReducer, applyMiddleware(thunk));
