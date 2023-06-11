import {useEffect, useState} from "react";

export function useWidthTracker() {
    const [innerWidth, setInnerWidth] = useState<number>(0);

    useEffect(() => {
        const trackInnerWidth = () => {
            setInnerWidth(window.innerWidth);
        };

        trackInnerWidth();
        window.addEventListener("resize", trackInnerWidth);


        return () => {
            window.removeEventListener("resize", trackInnerWidth);
        }
    }, []);

    return innerWidth;
}