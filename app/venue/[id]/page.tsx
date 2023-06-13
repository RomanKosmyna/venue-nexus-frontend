import {apiService} from "@/src/services";
import {urls} from "@/src/configs";
import VenueImage from "@/src/components/Venue/VenueImage/VenuePhoto";
import VenueName from "@/src/components/Venue/VenueName/VenueName";
import VenueSchedule from "@/src/components/Venue/VenueSchedule/VenueSchedule";
import VenueDescription from "@/src/components/Venue/VenueDescription/VenueDescription";
import VenueTags from "@/src/components/Venue/VenueTags/VenueTags";
import VenueContact from "@/src/components/Venue/VenueContact/VenueContact";
import VenuePublished from "@/src/components/Venue/VenuePublished/VenuePublished";

import styles from "../../../src/styles/page.module.css";

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
    const {name, photo, schedule, contact, description, tags, createdAt} = venueDetails;

    return (
        <main className={styles.page}>
            <VenueImage photo={photo}/>
            <VenuePublished createdAt={createdAt}/>
            <VenueName name={name}/>
            <VenueSchedule schedule={schedule}/>
            <VenueDescription description={description}/>
            <VenueTags tags={tags}/>
            <VenueContact contact={contact}/>
        </main>
    );
};

export default Page;