import Link from "next/link";

import styles from "./SubnavigationMenu.module.css";
import {usePathname} from "next/navigation";

const SubnavigationMenu = () => {
    const pathname = usePathname();

    return (
        <div className={styles.submenu}>
            <nav className={styles.submenuNavigation}>
                <Link href={"/"} className={`${pathname === "/" ? styles.active : ""}`}>Overview</Link>
                <Link href={"/news"} className={`${pathname === "/news" ? styles.active : ""}`}>News</Link>
            </nav>
        </div>
    );
};

export default SubnavigationMenu;