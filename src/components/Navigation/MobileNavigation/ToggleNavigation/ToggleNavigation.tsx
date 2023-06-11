"use client";

import {useAppDispatch, useAppSelector} from "@/src/hooks";
import {toggleActions} from "@/src/redux/slices";

import styles from "./ToggleNavigation.module.css";

const ToggleNavigation = () => {
    const dispatch = useAppDispatch();
    const {toggleNavigationMenu} = useAppSelector(state => state.toggleReducer);

    const toggleNavigation = () => {
        dispatch(toggleActions.toggleNavigationMenu(!toggleNavigationMenu));
    }

    return (
        <>
            <button
                title={"toggle mobile navigation menu"}
                type={"button"}
                className={styles.toggleNavigation}
                onClick={toggleNavigation}
            >
                <span className={`${styles.stripe} ${toggleNavigationMenu ? styles.move : ""}`}></span>
            </button>
        </>
    );
};

export default ToggleNavigation;