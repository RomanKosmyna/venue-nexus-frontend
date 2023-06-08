import {combineReducers} from "redux";
import {toggleReducer} from "@/src/redux/slices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    toggleReducer
});

const setupStore = () => configureStore({
        reducer: rootReducer
    });


type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export type {RootState, AppStore, AppDispatch};

export {setupStore};