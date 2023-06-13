import SearchContainer from "@/src/components/Dashboard/SearchContainer/SearchContainer";

import styles from "./DashboardContainer.module.css";
import VenuesContainer from "@/src/components/Dashboard/VenuesContainer/VenuesContainer";

const DashboardContainer = () => {
    return (
        <div className={styles.dashboardContainer}>
            <SearchContainer/>
            <VenuesContainer/>
        </div>
    );
};

export default DashboardContainer;