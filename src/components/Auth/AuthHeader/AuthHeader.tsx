"use client";

import Image from "next/image";
import {useAppSelector} from "@/src/hooks";

import styles from "./AuthHeader.module.css";
import SwitchThemeMode from "@/src/components/SwitchThemeMode/SwitchThemeMode";

const AuthHeader = () => {
    const {toggleThemeMode}: { toggleThemeMode: boolean } = useAppSelector(state => state.toggleReducer);

    return (
        <header className={styles.authHeader}>
            <div className={styles.score}>
                {toggleThemeMode ? <Image
                    src={"/img/logo(dark version).png"}
                    alt={"Spot Finder logo"}
                    width={90}
                    height={45}
                    priority={true}
                /> : <Image
                    src={"/img/logo(white version).png"}
                    alt={"Spot Finder logo"}
                    width={90}
                    height={45}
                    priority={true}
                />}
            </div>
            <div className={styles.settings}>
                <SwitchThemeMode/>
            </div>
        </header>
    );
};

export default AuthHeader;