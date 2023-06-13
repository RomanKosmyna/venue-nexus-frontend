import {type FC} from "react";
import {apiService} from "@/src/services";
import Image from "next/image";

import styles from "./VenuePhoto.module.css";

interface IPhoto {
    photo: string;
}

const VenuePhoto: FC<IPhoto> = ({photo}) => {
    const splitPhoto = photo.split("/")[1];
    const photoUrl = `${apiService}/${splitPhoto}`;

    return (
        <div className={styles.photoContainer}>
                <Image
                    src={photoUrl}
                    alt={"Venue photo"}
                    fill={true}
                    className={styles.photo}
                />
        </div>
    );
};

export default VenuePhoto;