import Image from "next/image";
import React from 'react';
import {cookies} from "next/headers";

import styles from "./UserDashboardHeaderInfo.module.css";

const UserDashboardHeaderInfo = () => {
    const cookie: any = cookies();
    const {value} = cookie.get("isLoggedIn");
    const userValue = JSON.parse(atob(value));

    return (
        <div className={styles.userDashboardInfo}>
            <div className={styles.userAvatar}>
                <Image
                    src={"/img/default avatar.jpg"}
                    alt={"User profile avatar"}
                    fill={true}
                />
            </div>
            <div className={styles.userUsername}>
                <p>{userValue?.username}</p>
            </div>
        </div>
    );
};

export default UserDashboardHeaderInfo;