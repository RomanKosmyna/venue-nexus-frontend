"use client";

import React from 'react';
import Image from "next/image";
import {useAppSelector} from "@/src/hooks";

import styles from "./Logo.module.css";

const Logo = () => {
    const {toggleThemeMode}: { toggleThemeMode: boolean } = useAppSelector(state => state.toggleReducer);

    return (
        <div className={styles.logo}>
            {toggleThemeMode ? <Image
                src={"/img/logo(dark version).png"}
                alt={"Spot Finder logo"}
                fill={true}
                priority={true}
            /> : <Image
                src={"/img/logo(white version).png"}
                alt={"Spot Finder logo"}
                fill={true}
                priority={true}
            />}
        </div>
    );
};

export default Logo;