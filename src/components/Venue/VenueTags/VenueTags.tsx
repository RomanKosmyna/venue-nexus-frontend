import {type FC} from "react";
import VenueTag from "@/src/components/Venue/VenueTag/VenueTag";

import styles from "./VenueTags.module.css";

interface ITags {
    tags: object;
}

const VenueTags: FC<ITags> = ({tags}) => {

    return (
        <div className={styles.tagContainer}>
            {tags?.map((tag, index) => (
                <VenueTag key={index} tag={tag} index={index}/>
            ))}
        </div>
    );
};

export default VenueTags;