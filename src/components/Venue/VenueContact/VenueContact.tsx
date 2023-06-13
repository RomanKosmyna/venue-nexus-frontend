import {type FC} from "react";

import styles from "./VenueContact.module.css";

interface IContact {
    contact: string;
}

const VenueContact: FC<IContact> = ({contact}) => {
    return (
        <div className={styles.contactContainer}>
            <p className={styles.contactText}>Contacts:</p>
            <p className={styles.contact}>{contact}</p>
        </div>
    );
};

export default VenueContact;