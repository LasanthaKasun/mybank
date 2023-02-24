import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import mapSearchReducer from "./mapSearchReducer";

export const rootReducer = combineReducers({
  searchData: mapSearchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
