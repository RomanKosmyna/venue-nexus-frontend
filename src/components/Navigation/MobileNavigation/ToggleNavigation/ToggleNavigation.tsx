"use client";

import {useAppDispatch, useAppSelector} from "@/src/hooks";
import {toggleActions} from "@/src/redux/slices";

import styles from "./ToggleNavigation.module.css";

const ToggleNavigation = () => {
    const dispatch = useAppDispatch();
    const {toggleMobileNavigationMenu} = useAppSelector(state => state.toggleReducer);

    const toggleNavigation = () => {
        dispatch(toggleActions.toggleMobileNavigationMenu(!toggleMobileNavigationMenu));
    }

    return (
        <>
            <button
                title={"toggle mobile navigation menu"}
                type={"button"}
                className={styles.toggleNavigation}
                onClick={toggleNavigation}
            >
                <span className={`${styles.stripe} ${toggleMobileNavigationMenu ? styles.move : ""}`}></span>
            </button>
        </>
    );
};

export default ToggleNavigation;