import Banner from "@pages/categories/smartWatch/banner/banner";
import Collection from "./collection/collection";
import Arrivals from "./arrivals/arrivals";
import ExploreCategories from "./explore/explore";
import Sellers from "./sellers/sellers";
import RotatingBanners from "@components/common/RotatingBanners/RotatingBanners";
import Comments from "./comments/comment";
const SmartWatch = () => {
   return (
      <>
         <Banner />
         <Collection />
         <Arrivals />
         <ExploreCategories />
         <Sellers />
         <RotatingBanners />
         <Comments />
      </>
   );
};
export default SmartWatch;
