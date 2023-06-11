"use client";

import SubnavigationMenu from "@/src/components/Subnavigation/SubnavigationMenu/SubnavigationMenu";
import {useAppSelector} from "@/src/hooks";

const SubnavigationWrapper = () => {
    const {toggleNavigationMenu} = useAppSelector(state => state.toggleReducer);

    return (
        <>
            {!toggleNavigationMenu && <SubnavigationMenu/>}
        </>
    );
};

export default SubnavigationWrapper;