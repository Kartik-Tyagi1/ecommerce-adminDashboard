"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

/*
 * We want the store modal to be able to be accessed from throughout the application so we need to include it in the layout.tsx file
 * The layout file is a server component and we cannot add a client component unless it is fully loaded otherwise it will cause synchronization
 * issues bewteen the server side rendering and the client side rendering leading to hydradtion errors. 
 * 
 * So we what do is make sure the component it fully loaded using this provider and only return the 
 * component if it is "mounted" or fully loaded
*/

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    return (
        <>
            <StoreModal/>
        </>
    )

};