"use client";

import {useAppDispatch, useAppSelector, useWidthTracker} from "@/src/hooks";
import MobileNavigationContainer
    from "@/src/components/Navigation/MobileNavigation/MobileNavigationContainer/MobileNavigationContainer";
import {toggleActions} from "@/src/redux/slices";
import {useEffect} from "react";

const MobileNavigationWrapper = () => {
    const dispatch = useAppDispatch();
    const {toggleMobileNavigationMenu} = useAppSelector(state => state.toggleReducer);
    const innerWidth = useWidthTracker();

    useEffect(() => {
        if (innerWidth >= 768 && toggleMobileNavigationMenu) {
            dispatch(toggleActions.toggleMobileNavigationMenu(false));
        }
    },[innerWidth, toggleMobileNavigationMenu])

    return (
        <>
            {(innerWidth < 768 && toggleMobileNavigationMenu) ? <MobileNavigationContainer/> : null}
        </>
    );
};

export default MobileNavigationWrapper;