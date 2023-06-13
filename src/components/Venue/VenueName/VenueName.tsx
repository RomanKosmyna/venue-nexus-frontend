import {type FC} from "react";

import styles from "./VenueName.module.css";

interface IName {
    name: string;
}

const VenueName: FC<IName> = ({name}) => {
    return (
        <div className={styles.nameContainer}>
            <h2 className={styles.name}>{name}</h2>
        </div>
    );
};

export default VenueName;