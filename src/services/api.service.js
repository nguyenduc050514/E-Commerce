import { instance, instance2 } from "@services/api.customize";

const getSection = () => {
   const URL_BACKEND = "/banner";
   return instance.get(URL_BACKEND);
};

const getExploreCategories = () => {
   const URL_BACKEND = "/categories";
   return instance2.get(URL_BACKEND);
};

const getAllProductsPopular = () => {
   const URL_BACKEND = "/products";
   return instance2.get(URL_BACKEND);
};

export { getSection, getExploreCategories, getAllProductsPopular };
