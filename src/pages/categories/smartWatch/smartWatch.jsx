import Banner from "@pages/categories/smartWatch/banner/banner";
import Collection from "./collection/collection";
import Arrivals from "./arrivals/arrivals";
import ExploreCategories from "./explore/explore";
import Sellers from "./sellers/sellers";
import RotatingBanners from "@components/common/RotatingBanners/RotatingBanners";
const SmartWatch = () => {
   return (
      <>
         <Banner />
         <Collection />
         <Arrivals />
         <ExploreCategories />
         <Sellers />
         <RotatingBanners />
      </>
   );
};
export default SmartWatch;
