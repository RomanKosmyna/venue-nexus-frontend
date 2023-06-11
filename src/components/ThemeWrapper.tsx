"use client";

import {useAppSelector} from "@/src/hooks";
import React from "react";

import styles from "@/app/(auth)/layout.module.css";

const ThemeWrapper = ({children}: { children: React.ReactNode }) => {
    const {toggleThemeMode}: { toggleThemeMode: boolean } = useAppSelector(state => state.toggleReducer);

    return (
        <div className={styles.main} data-theme={toggleThemeMode ? "light" : "dark"}>
            {children}
        </div>
    );
};

export default ThemeWrapper;