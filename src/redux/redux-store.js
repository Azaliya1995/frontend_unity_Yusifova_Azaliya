import {applyMiddleware, combineReducers, createStore} from "redux";
import photosListReducer from "../reducers/PhotosListReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    photosListPage: photosListReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
