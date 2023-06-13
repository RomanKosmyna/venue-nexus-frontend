import {type FC} from 'react';

import styles from "./VenueDescription.module.css";

interface IDescription {
    description: string;
}

const VenueDescription: FC<IDescription> = ({description}) => {
    return (
        <div className={styles.descriptionContainer}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa delectus eum facilis, incidunt
                iste nemo quia repellendus tempora voluptatem?</p>
        </div>
    );
};

export default VenueDescription;