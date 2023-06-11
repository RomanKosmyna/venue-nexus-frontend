"use client";

import {useAppDispatch, useAppSelector, useWidthTracker} from "@/src/hooks";
import MobileNavigationContainer
    from "@/src/components/Navigation/MobileNavigation/MobileNavigationContainer/MobileNavigationContainer";
import {toggleActions} from "@/src/redux/slices";
import {useEffect} from "react";

const MobileNavigationWrapper = () => {
    const dispatch = useAppDispatch();
    const {toggleNavigationMenu} = useAppSelector(state => state.toggleReducer);
    const innerWidth = useWidthTracker();

    useEffect(() => {
        if (innerWidth >= 768 && toggleNavigationMenu) {
            dispatch(toggleActions.toggleNavigationMenu(false));
        }
    },[innerWidth, toggleNavigationMenu])

    return (
        <div>
            {(innerWidth < 768 && toggleNavigationMenu) ? <MobileNavigationContainer/> : null}
        </div>
    );
};

export default MobileNavigationWrapper;