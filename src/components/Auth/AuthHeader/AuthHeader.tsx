import SwitchThemeMode from "@/src/components/SwitchThemeMode/SwitchThemeMode";
import Logo from "@/src/components/Logo/Logo";

import styles from "./AuthHeader.module.css";

const AuthHeader = () => {
    return (
        <header className={styles.authHeader}>
            <div className={styles.score}>
                <Logo/>
            </div>
            <div className={styles.settings}>
                <SwitchThemeMode/>
            </div>
        </header>
    );
};

export default AuthHeader;