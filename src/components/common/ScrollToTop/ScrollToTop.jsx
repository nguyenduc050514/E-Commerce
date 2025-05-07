import { useEffect } from "react";
import { useLocation } from "react-router";
const ScrollToTop = () => {
   const { pathname } = useLocation();
   useEffect(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo({
         top: 0,
         left: 0,
         behavior: "instant",
      });
   }, [pathname]);
   return null;
};
export default ScrollToTop;