"use client";

import {useWidthTracker} from "@/src/hooks";
import ToggleNavigation from "@/src/components/Navigation/MobileNavigation/ToggleNavigation/ToggleNavigation";
import DesktopNavigationContainer
    from "@/src/components/Navigation/DesktopNavigation/DesktopNavigationContainer/DesktopNavigationContainer";

const ToggleNavigationWrapper = () => {
    const innerWidth = useWidthTracker();

    return (
        <>
            {innerWidth < 768 ? <ToggleNavigation/> : <DesktopNavigationContainer/>}
        </>
    );
};

export default ToggleNavigationWrapper;