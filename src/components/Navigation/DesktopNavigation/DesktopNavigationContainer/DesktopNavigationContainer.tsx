import ToggleUserMenu from "@/src/components/UserMenu/ToggleUserMenu/ToggleUserMenu";
import {useAppSelector} from "@/src/hooks";
import Link from "next/link";

import styles from "./DesktopNavigationContainer.module.css";
import UserMenuContainer from "@/src/components/UserMenu/UserMenuContainer/UserMenuContainer";

const DesktopNavigationContainer = () => {
    const {toggleUserMenu} = useAppSelector(state => state.toggleReducer);

    return (
        <div className={styles.desktopNavContainer}>
            <nav>
                <ul className={styles.desktopNavList}>
                    <li className={styles.desktopNavListItem}>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className={styles.desktopNavListItem}>
                        <Link href={"/top"}>Top Venues</Link>
                    </li>
                    <li className={styles.desktopNavListItem}>
                        <Link href={"/puyachok"}>Puyachok</Link>
                    </li>
                    <li className={styles.desktopNavListItem}>
                        <Link href={"/help"}>Help</Link>
                    </li>
                    <li className={styles.desktopNavListItem}>
                        <Link href={"/documentation"}>Docs</Link>
                    </li>
                    <li className={styles.desktopNavListItem}>
                        <ToggleUserMenu/>
                    </li>
                </ul>
            </nav>
            {toggleUserMenu && <UserMenuContainer/>}
        </div>
    );
};

export default DesktopNavigationContainer;