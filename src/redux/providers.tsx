"use client";

import React from "react";
import {setupStore} from "@/src/redux/store";
import {Provider} from "react-redux";

export default function Providers({children}: {children: React.ReactNode}) {
    const store = setupStore();
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}