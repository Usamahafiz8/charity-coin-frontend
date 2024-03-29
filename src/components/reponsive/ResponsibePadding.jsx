import { useEffect, useState } from "react";

const useResponsivePadding = () => {
  const [isMediumOrBigger, setIsMediumOrBigger] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumOrBigger(window.innerWidth > 768); // Adjust as per your definition of medium
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return isMediumOrBigger;
};

export default useResponsivePadding;
