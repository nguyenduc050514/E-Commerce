import { useLocation } from "react-router";
import MenWomenAccessories from "./MWASection/MWA";
const Category = () => {
   const location = useLocation();
   const path = location.pathname.split("/").filter(Boolean).pop() || "";
   const validPaths = new Set(["men", "women", "accessory"]);
   return <>{validPaths.has(path) && <MenWomenAccessories />}</>;
};

export default Category;
