import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Check if browser window exists and get its origin path
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return "";
  }

  return origin;
};
