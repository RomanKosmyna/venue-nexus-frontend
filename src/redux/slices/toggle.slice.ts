import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface IState {
    toggleThemeMode: boolean;
    toggleMobileNavigationMenu: boolean;
    toggleUserMenu: boolean;
}

const initialState: IState = {
    toggleThemeMode: false,
    toggleMobileNavigationMenu: false,
    toggleUserMenu: false
};

const toggleSlice = createSlice({
    name: "toggleSlice",
    initialState,
    reducers: {
        toggleThemeMode: (state: IState, action: PayloadAction<boolean>) => {
            state.toggleThemeMode = action.payload;
        },
        toggleMobileNavigationMenu: (state: IState, action: PayloadAction<boolean>) => {
            state.toggleMobileNavigationMenu = action.payload;
        },
        toggleUserMenu: (state: IState, action: PayloadAction<boolean>) => {
            state.toggleUserMenu = action.payload;
        },
    }
});

const {reducer: toggleReducer, actions: {toggleThemeMode, toggleMobileNavigationMenu, toggleUserMenu}} = toggleSlice;

const toggleActions = {
    toggleThemeMode,
    toggleMobileNavigationMenu,
    toggleUserMenu
};

export {toggleReducer, toggleActions};