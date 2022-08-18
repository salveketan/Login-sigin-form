import { legacy_createStore } from "redux";
import { authReducer } from "./authReducer/reducer";

export const store = legacy_createStore(authReducer);

console.log(store.getState());