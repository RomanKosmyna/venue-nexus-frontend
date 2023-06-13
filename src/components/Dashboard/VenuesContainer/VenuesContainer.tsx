import {apiService} from "@/src/services";
import {urls} from "@/src/configs";

import styles from "./VenuesContainer.module.css";
import VenueCard from "@/src/components/Dashboard/VenueCard/VenueCard";

const getData = async () => {
    const res = await fetch(`${apiService}${urls.venue.getAllVenues}`, {cache: "no-cache"});

    return await res.json();
};

const VenuesContainer = async () => {
    const venueData = await getData();

    return (
        <div className={styles.venuesContainer}>
            {venueData?.map((venue) => (
                <VenueCard key={venue.id} data={venue}/>
            ))}
        </div>
    );
};

export default VenuesContainer;