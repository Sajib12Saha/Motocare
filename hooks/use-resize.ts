import { useEffect, useState } from "react";

export const usereSize = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768); // Mobile: <768px
      handleResize(); // Check on mount
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return {isMobile}
}