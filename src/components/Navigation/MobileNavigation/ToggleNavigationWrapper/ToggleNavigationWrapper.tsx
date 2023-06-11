"use client";

import {useWidthTracker} from "@/src/hooks";
import ToggleNavigation from "@/src/components/Navigation/MobileNavigation/ToggleNavigation/ToggleNavigation";

const ToggleNavigationWrapper = () => {
    const innerWidth = useWidthTracker();

    return (
        <>
            {innerWidth < 768 && <ToggleNavigation/>}
        </>
    );
};

export default ToggleNavigationWrapper;