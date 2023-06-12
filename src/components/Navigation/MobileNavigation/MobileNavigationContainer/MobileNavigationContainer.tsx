"use client";

import SwitchThemeMode from "@/src/components/SwitchThemeMode/SwitchThemeMode";
import LogOut from "@/src/components/Navigation/LogOut/LogOut";
import {useAppDispatch, useAppSelector} from "@/src/hooks";
import {toggleActions} from "@/src/redux/slices";
import Link from "next/link";

import styles from "./MobileNavigationContainer.module.css";
import UserDashboardInformation from "@/src/components/Navigation/UserDashboardInformation/UserDashboardInformation";

const MobileNavigationContainer = () => {
    const dispatch = useAppDispatch();
    const {toggleMobileNavigationMenu} = useAppSelector(state => state.toggleReducer);

    const closeMenu = () => {
        return dispatch(toggleActions.toggleMobileNavigationMenu(!toggleMobileNavigationMenu));
    }

    return (
        <nav className={styles.mobMenuWrapper}>
            <ul className={styles.mobMenuList}>
                <li className={styles.mobNavListItem}>
                    <UserDashboardInformation/>
                </li>
                <li className={styles.mobNavListItem}>
                    <Link href={"/dashboard"}>Dashboard</Link>
                </li>
                <li className={styles.mobNavListItem}>
                    <Link href={"/settings"}>Settings</Link>
                </li>
                <li className={styles.mobNavListItem}>
                    <button onClick={closeMenu}>Home</button>
                </li>
                <li className={styles.mobNavListItem}>
                    <Link href={"/top"}>Top Venues</Link>
                </li>
                <li className={styles.mobNavListItem}>
                    <Link href={"/puyachok"}>Puyachok</Link>
                </li>
                <li className={`${styles.mobNavListItem} ${styles.themeSwitcher}`}>
                    Theme
                    <SwitchThemeMode/>
                </li>
                <li className={styles.mobNavListItem}>
                    <LogOut/>
                </li>
            </ul>
            <h4 className={styles.h4}>Resources</h4>
            <ul className={styles.mobMenuList}>
                <li className={styles.mobNavListItem}>
                    <Link href={"/help"}>Help</Link>
                </li>
                <li className={styles.mobNavListItem}>
                    <Link href={"/documentation"}>Documentation</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MobileNavigationContainer;