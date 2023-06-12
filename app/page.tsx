import Header from "@/src/components/Header/Header";

import MobileNavigationWrapper
    from "@/src/components/Navigation/MobileNavigation/MobileNavigationWrapper/MobileNavigationWrapper";
import SubnavigationWrapper from "@/src/components/Subnavigation/SubnavigationWrapper/SubnavigationWrapper";
import DashboardContainer from "@/src/components/Dashboard/DashboardContainer/DashboardContainer";

import styles from "../src/styles/page.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <Header/>
            <SubnavigationWrapper/>
            <MobileNavigationWrapper/>
            <DashboardContainer/>
        </div>
    )
}
