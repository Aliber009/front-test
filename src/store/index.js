import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { playerReducer } from "./players";

const reducer = combineReducers({
    playerReducer,
})

export default configureStore({reducer})