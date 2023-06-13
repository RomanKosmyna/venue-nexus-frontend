import {type FC} from "react";

import styles from "./VenueSchedule.module.css";

interface ISchedule {
    schedule: string;
}

const VenueSchedule: FC<ISchedule> = ({schedule}) => {
    return (
        <div className={styles.scheduleContainer}>
            <p className={styles.scheduleText}>Schedule:</p>
            <p className={styles.schedule}>{schedule}</p>
        </div>
    );
};

export default VenueSchedule;