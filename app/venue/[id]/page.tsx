import React from 'react';
import {apiService} from "@/src/services";
import {urls} from "@/src/configs";
import VenueImage from "@/src/components/Venue/VenueImage/VenuePhoto";

import styles from "../../../src/styles/page.module.css";
import VenueName from "@/src/components/Venue/VenueName/VenueName";

interface IVenue {
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

const getData = async (id) => {
    const res = await fetch(`${apiService}${urls.venue.getVenueById(id)}`, {cache: "no-cache"});
    return await res.json();
}

const Page = async ({params}: { params: { slug: string } }) => {
    const {id} = params;
    const venueDetails: IVenue = await getData(id);
    const {name, photo, schedule, contact, description, tags, createdAt, updatedAt} = venueDetails;

    return (
        <main className={styles.page}>
            <VenueImage photo={photo}/>
            <VenueName name={name}/>
        </main>
    );
};

export default Page;