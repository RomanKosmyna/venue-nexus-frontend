import React from 'react';
import Image from "next/image";
import {apiService} from "@/src/services";
import VenueTag from "@/src/components/Dashboard/VenueTag/VenueTag";
import CardButton from "@/src/components/Dashboard/CardButton/CardButton";

import styles from "./VenueCard.module.css";

interface IProps {
    data: {
        id: number;
        name: string;
        photo: string;
        schedule: string;
        contact: string;
        description: string;
        tags: object;
        createdAt: string;
        updatedAt: string;
    }
}

const VenueCard = ({data}: IProps) => {
    const {id, name, photo, tags, description, schedule, createdAt} = data;
    const splitPhoto = photo.split("/")[1];
    const photoUrl = `${apiService}/${splitPhoto}`;
    const publishDate = createdAt.split("T")[0];
    return (
        <div className={styles.venueCard}>
            <div className={styles.venueCardDetails}>
                <div className={styles.cardTopPart}>
                    <div className={styles.venuePhoto}>
                        <Image
                            src={photoUrl}
                            alt={`Venue photo`}
                            fill={true}
                        />
                    </div>
                    <div className={styles.venueName}>
                        <h2 className={styles.venueHeading}>{name}</h2>
                        <div className={styles.venueSchedule}>
                            <span>{schedule}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.cardMidPart}>
                    <p>{description}</p>
                </div>

                <div className={styles.venueViewButton}>
                    <CardButton id={id} text={"View Details"}/>
                </div>

                <div className={styles.venueTagPart}>
                    {tags?.map((tag, index) => (
                        <VenueTag key={index} tag={tag} index={index}/>
                    ))}
                </div>
                <div className={styles.venuePublishedPart}>
                    <p className={styles.publishedText}>
                        Published on:
                        &nbsp;
                        <span className={styles.publishedDate}>
                            {publishDate}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VenueCard;