import { useState, useEffect } from "react";

function useMeida() {
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    const resizeFn = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setIsPhone(true);
      } else {
        setIsPhone(false);
      }
    };

    window.addEventListener("resize", resizeFn);
    return () => {
      window.removeEventListener("resize", resizeFn);
    };
  }, []);

  return [isPhone];
}

export default useMeida;
