"use client";

import React from 'react';
import Image from "next/image";
import {useAppSelector} from "@/src/hooks";

const Logo = () => {
    const {toggleThemeMode}: { toggleThemeMode: boolean } = useAppSelector(state => state.toggleReducer);

    return (
        <>
            {toggleThemeMode ? <Image
                src={"/img/logo(dark version).png"}
                alt={"Spot Finder logo"}
                width={90}
                height={45}
                priority={true}
                style={{display: "flex", justifyContent: "flex-start"}}
            /> : <Image
                src={"/img/logo(white version).png"}
                alt={"Spot Finder logo"}
                width={90}
                height={45}
                priority={true}
            />}
        </>
    );
};

export default Logo;