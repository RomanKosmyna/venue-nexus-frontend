import SearchContainer from "@/src/components/Dashboard/SearchContainer/SearchContainer";

import styles from "./DashboardContainer.module.css";

const DashboardContainer = () => {
    return (
        <div className={styles.dashboardContainer}>
            <SearchContainer/>

        </div>
    );
};

export default DashboardContainer;