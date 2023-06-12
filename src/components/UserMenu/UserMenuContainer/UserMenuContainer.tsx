import React from 'react';
import Link from "next/link";
import SwitchThemeMode from "@/src/components/SwitchThemeMode/SwitchThemeMode";
import LogOut from "@/src/components/Navigation/LogOut/LogOut";
import {getCookie} from "cookies-next";

import styles from "./UserMenuContainer.module.css";

const UserMenuContainer = () => {
    const token = getCookie("accessToken") as string;
    const payload = token.split(".")[1];
    const user = payload !== "" ? JSON.parse(atob(payload)) : null;

    return (
        <div className={styles.userMenuContainer}>
            <ul className={styles.userDetailsList}>
                <li className={styles.userDetailsListItem}>
                    <p className={styles.userDetailsEmail}>{user?.email ?? "Unknown email"}</p>
                </li>
                <li className={styles.userDetailsListItem}>
                    <Link href={"/dashboard"} className={styles.link}>Dashboard</Link>
                </li>
                <li className={styles.userDetailsListItem}>
                    <Link href={"/settings"} className={styles.link}>Settings</Link>
                </li>
                <li className={`${styles.userDetailsListItem} ${styles.themeSwitcher}`}>
                    Theme
                    <SwitchThemeMode/>
                </li>
                <li className={styles.userDetailsListItem}>
                    <LogOut/>
                </li>
            </ul>
        </div>
    );
};

export default UserMenuContainer;