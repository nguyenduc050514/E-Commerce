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

const removeWishlist = (id) => {
   const URL_BACKEND = `/wishlist/${id}`;
   return instance2.delete(URL_BACKEND);
};

const addWishList = (id) => {
   const URL_BACKEND = "/wishlist";
   const data = {
      id,
      addedAt: new Date().toISOString(),
   };
   return instance2.post(URL_BACKEND, data);
};

const getWishList = () => {
   const URL_BACKEND = "/wishlist";
   return instance2.get(URL_BACKEND);
};

const deleteWishList = (id) => {
   const URL_BACKEND = `/wishlist/${id}`;
   return instance2.delete(URL_BACKEND);
};

export {
   getSection,
   getExploreCategories,
   getAllProductsPopular,
   removeWishlist,
   getWishList,
   addWishList,
   deleteWishList,
};
