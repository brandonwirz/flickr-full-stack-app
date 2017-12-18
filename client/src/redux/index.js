import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import flickr from "./flickr";

const rootReducer = combineReducers({
      flickr
})

export default createStore(rootReducer, applyMiddleware(thunk));
