import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface IState {
    toggleThemeMode: boolean;
    toggleNavigationMenu: boolean;
}

const initialState: IState = {
    toggleThemeMode: false,
    toggleNavigationMenu: false,
};

const toggleSlice = createSlice({
    name: "toggleSlice",
    initialState,
    reducers: {
        toggleThemeMode: (state: IState, action: PayloadAction<boolean>) => {
            state.toggleThemeMode = action.payload;
        },
        toggleNavigationMenu: (state: IState, action: PayloadAction<boolean>) => {
            state.toggleNavigationMenu = action.payload;
        }
    }
});

const {reducer: toggleReducer, actions: {toggleThemeMode, toggleNavigationMenu}} = toggleSlice;

const toggleActions = {
    toggleThemeMode,
    toggleNavigationMenu
};

export {toggleReducer, toggleActions};