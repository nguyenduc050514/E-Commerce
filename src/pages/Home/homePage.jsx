import Explore from "@layout/explore";
import Popular from "@layout/popular";
import NewPopular from "@layout/newpopular";
import Section from "@components/section";
import BestProducts from "@layout/bestpopular";
const HomePage = () => {
   return (
      <>
         <Section />
         <Explore />
         <Popular />
         <NewPopular />
         <BestProducts />
      </>
   );
};
export default HomePage;
