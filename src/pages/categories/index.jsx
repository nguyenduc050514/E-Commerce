import { useLocation } from "react-router";
import MenWomenAccessories from "./MWASection/MWA";
import SmartWatch from "./smartWatch/smartWatch";
import Furniture from "./furniture";
const Category = () => {
   const location = useLocation();
   const path = location.pathname.split("/").pop();
   switch (path) {
      case "men":
      case "women":
      case "modern":
         return <MenWomenAccessories />;
      case "smart":
      case "mobile":
      case "computer":
         return <SmartWatch />;
      case "furniture":
         return <Furniture />;
      default:
         return <div>Not Found</div>;
   }
};

export default Category;
/*
   // .pop() xóa phần tử cuối cùng của mảng và trả về phần tử đó
   // const validPaths = new Set(["men", "women", "accessory"]);
   // const isValidPathSmartwatch = new Set(["smart", "mobile", "computer"]);
*/
