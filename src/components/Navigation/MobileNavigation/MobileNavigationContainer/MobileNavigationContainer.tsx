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
    const {toggleNavigationMenu} = useAppSelector(state => state.toggleReducer);

    const closeMenu = () => {
        return dispatch(toggleActions.toggleNavigationMenu(!toggleNavigationMenu));
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
        </nav>
    );
};

export default MobileNavigationContainer;