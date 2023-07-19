"use client"

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  // import direct state values so we can use inside useEffect hook
    const onOpen = useStoreModal((state) => state.onOpen); 
    const isOpen = useStoreModal((state) => state.isOpen);

    // From the setup page, 
    // if user has no stores created, the store creation modal will show up and not disappear until a store is created
    // the GLOBAL store model is then opened
    useEffect(() => {
      if(!isOpen)
      {
        onOpen();
      }
    }, [isOpen, onOpen]);

    return (
      <div className="p-4">
        Root Page
      </div>
    )
}

export default SetupPage;