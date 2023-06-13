import styles from "./VenuePublished.module.css";
import {type FC} from "react";

interface IPublished {
    createdAt: string;
}

const VenuePublished: FC<IPublished> = ({createdAt}) => {
    const published = createdAt.split("T")[0];

    return (
        <div className={styles.publishContainer}>
            <p className={styles.publishText}>
                Published on:
                &nbsp;
                <span className={styles.publish}>
                    {published}
                </span>
            </p>
        </div>
    );
};

export default VenuePublished;