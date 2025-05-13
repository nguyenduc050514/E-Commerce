import Header from "@pages/categories/furniture/header/header";
import SofaFeature from "@pages/categories/furniture/SofaFeatureSection/SofaFeature";
import Category from "@pages/categories/furniture/categoriesFurniture/categories";
import Products from "@pages/categories/furniture/productsNew/products";
import BestFurniture from "@pages/categories/furniture/bestFurniture/bestfurniture";
import ServicesOur from "@pages/categories/furniture/ourservices/services";
const Furniture = () => {
   return (
      <>
         <Header />
         <SofaFeature />
         <Category />
         <Products />
         <BestFurniture />
         <ServicesOur />
      </>
   );
};
export default Furniture;
