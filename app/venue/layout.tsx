import React from "react";

import Header from "@/src/components/Header/Header";
import SubnavigationWrapper from "@/src/components/Subnavigation/SubnavigationWrapper/SubnavigationWrapper";

import styles from "./layout.module.css";

export default function VenueLayout({children}: {children: React.ReactNode}) {


    return (
        <div className={styles.main}>
            <Header/>
            <SubnavigationWrapper/>
            {children}
        </div>
    )
}