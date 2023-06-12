"use client";

import {useAppDispatch, useAppSelector} from "@/src/hooks";
import {toggleActions} from "@/src/redux/slices";
import Image from "next/image";
import React from "react";

import styles from "./ToggleUserMenu.module.css";

const ToggleUserMenu = () => {
    const dispatch = useAppDispatch();
    const {toggleUserMenu} = useAppSelector(state => state.toggleReducer);

    const toggleMenu = () => {
      dispatch(toggleActions.toggleUserMenu(!toggleUserMenu));
    };

    return (
        <button className={styles.toggleUserMenu} onClick={toggleMenu}>
            <Image
                src={"/img/default avatar.jpg"}
                alt={"User profile avatar"}
                fill={true}
            />
        </button>
    );
};

export default ToggleUserMenu;