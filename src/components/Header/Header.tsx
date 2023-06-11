import Logo from "@/src/components/Logo/Logo";
import ToggleNavigationWrapper
    from "@/src/components/Navigation/MobileNavigation/ToggleNavigationWrapper/ToggleNavigationWrapper";

import styles from "./Header.module.css";

const Header = () => {

    return (
        <div className={styles.header}>
            <Logo/>
            <ToggleNavigationWrapper/>
        </div>
    );
};

export default Header;