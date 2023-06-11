import styles from "./UserDashboardInformation.module.css";
import Image from "next/image";
import {getCookie} from "cookies-next";

const UserDashboardInformation = () => {
    const token = getCookie("accessToken") as string;
    const payload = token.split(".")[1];
    const user = payload !== "" ? JSON.parse(atob(payload)) : null;

    return (
        <div className={styles.userDashInfo}>
            <p className={styles.userEmail}>{user?.email ?? "Unknown email"}</p>
            <span className={styles.userAvatar}>
                <Image
                    src={"/img/default avatar.jpg"}
                    alt={"Default user avatar"}
                    fill={true}
                />
            </span>
        </div>
    );
};

export default UserDashboardInformation;