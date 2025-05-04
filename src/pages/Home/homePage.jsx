import Explore from "@layout/explore";
import Popular from "@layout/popular";
import NewPopular from "@layout/newpopular";
import Section from "@components/section";
import BestProducts from "@layout/bestpopular";
import LimitedOfferAlert from "@layout/LimitedOfferAlert";
import ProductSkeletonLoader from "@components/common/skeletonProducts/SkeletonProducts";
import Brands from "@layout/brands";
const HomePage = () => {
   return (
      <>
         <Section />
         <Explore />
         <Popular />
         <NewPopular />
         <BestProducts />
         <LimitedOfferAlert />
         <ProductSkeletonLoader />
         <Brands />
      </>
   );
};
export default HomePage;
