import Logo from "@/src/components/Logo/Logo";
import ToggleNavigationWrapper
    from "@/src/components/Navigation/MobileNavigation/ToggleNavigationWrapper/ToggleNavigationWrapper";

import styles from "./Header.module.css";
import UserDashboardHeaderInfo from "@/src/components/UserDashboard/UserDashboardHeaderInfo/UserDashboardHeaderInfo";

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.scope}>
                <Logo/>
                <UserDashboardHeaderInfo/>
            </div>
            <ToggleNavigationWrapper/>
        </header>
    );
};

export default Header;