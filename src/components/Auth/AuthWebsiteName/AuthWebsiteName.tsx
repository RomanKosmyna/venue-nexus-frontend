"use client";

import {useEffect, useState} from "react";

import styles from "./AuthWebsiteName.module.css";

const AuthWebsiteName = () => {
    const [activeWord, setActiveWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveWord(activeWord => (activeWord + 1) % 2);
        }, 4000);

        return () => {
            clearInterval(interval)
        };
    }, [])

    return (
        <h1 className={styles.websiteName}>
            <span className={activeWord === 0 ? styles.venue : ""}>Venue</span>
            &nbsp;
            <span className={activeWord === 1 ? styles.nexus : ""}>Nexus</span>
        </h1>
    );
};

export default AuthWebsiteName;