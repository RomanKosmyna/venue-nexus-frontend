"use client";

import React, {type FC} from 'react';

import styles from "./AuthHeadingAbout.module.css";

interface IProps {
    heading: string;
}

const AuthHeadingAbout: FC<IProps> = ({heading}) => {

    return (
        <h2 className={styles.headingAbout}>
            {heading}
        </h2>
    );
};

export default AuthHeadingAbout;