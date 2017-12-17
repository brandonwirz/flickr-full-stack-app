import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import photos from "./flickr";

const rootReducer = combineReducers({
      photos
})

export default createStore(rootReducer, applyMiddleware(thunk));
