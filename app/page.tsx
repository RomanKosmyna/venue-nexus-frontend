import Header from "@/src/components/Header/Header";

import MobileNavigationWrapper
    from "@/src/components/Navigation/MobileNavigation/MobileNavigationWrapper/MobileNavigationWrapper";
import SubnavigationWrapper from "@/src/components/Subnavigation/SubnavigationWrapper/SubnavigationWrapper";

import styles from "../src/styles/page.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <Header/>
            <SubnavigationWrapper/>
            <MobileNavigationWrapper/>
        </div>
    )
}
