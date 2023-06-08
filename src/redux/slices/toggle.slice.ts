import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface IState {
    toggleThemeMode: boolean;
}

const initialState: IState = {
    toggleThemeMode: false,
};

const toggleSlice = createSlice({
    name: "toggleSlice",
    initialState,
    reducers: {
        toggleThemeMode: (state: IState, action: PayloadAction<boolean>) => {
            state.toggleThemeMode = action.payload;
        }
    }
});

const {reducer: toggleReducer, actions: {toggleThemeMode}} = toggleSlice;

const toggleActions = {
    toggleThemeMode
};

export {toggleReducer, toggleActions};