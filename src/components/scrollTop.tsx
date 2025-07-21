import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// This component is use to scroll the page on top while the route is change
const ScrollTop = () => {
   const { pathname } = useLocation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [ pathname ])
   return null;
}
export default ScrollTop;