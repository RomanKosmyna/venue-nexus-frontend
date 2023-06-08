"use client";

import React from "react";
import AuthHeader from "@/src/components/Auth/AuthHeader/AuthHeader";
import {useAppSelector} from "@/src/hooks";

import styles from "./layout.module.css";

export default function AuthLayout({children}: { children: React.ReactNode }) {
    const {toggleThemeMode}: { toggleThemeMode: boolean } = useAppSelector(state => state.toggleReducer);

    return (
        <div className={styles.main} data-theme={toggleThemeMode ? "light" : "dark"}>
            <AuthHeader/>
            {children}
        </div>
    )
}