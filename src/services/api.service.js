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

const getAllBrandsProducts = () => {
   const URL_BACKEND = "/brands";
   return instance2.get(URL_BACKEND);
};

const getAllBlogsList = () => {
   const URL_BACKEND = "/blogs";
   return instance2.get(URL_BACKEND);
};

const addCartList = async (
   id,
   category,
   image,
   price,
   rating,
   title,
   label,
   price_old,
   quantity
) => {
   try {
      const URL_BACKEND = "/carts";
      const response = await instance2.get(URL_BACKEND, {
         params: { id: id },
      });
      const existingItems = response.data;
      if (existingItems.length > 0) {
         const existingItem = existingItems[0];
         const updatedItem = {
            ...existingItem,
            quantity: quantity,
         };
         const URL_BACKEND = `/carts/${existingItem.id}`;
         await instance2.patch(URL_BACKEND, updatedItem);
      } else {
         const newCartItem = {
            id,
            category,
            image,
            price,
            rating,
            title,
            label,
            price_old,
            quantity,
         };
         await instance2.post(URL_BACKEND, newCartItem);
      }
   } catch (error) {
      console.error("Error in addCartList:", error);
      throw error;
   }
};

const getAllCart = () => {
   const URL_BACKEND = "/carts";
   return instance2.get(URL_BACKEND);
};

const getCollectionProducts = () => {
   const URL_BACKEND = "/collection-best";
   return instance2.get(URL_BACKEND);
};

const getArrivalsProducts = () => {
   const URL_BACKEND = "/arrivals";
   return instance2.get(URL_BACKEND);
};

const getSmartCategories = () => {
   const URL_BACKEND = "/smartCategories";
   return instance2.get(URL_BACKEND);
};

const getCommentsAll = () => {
   const URL_BACKEND = "/comments";
   return instance2.get(URL_BACKEND);
};

const getBlogsAllList = () => {
   const URL_BACKEND = "/smart-blogs";
   return instance2.get(URL_BACKEND);
};

const getAllThumbnail = () => {
   const URL_BACKEND = "/sofa-thumbnail";
   return instance2.get(URL_BACKEND);
};

const getCategoriesSofa = () => {
   const URL_BACKEND = "/sofa-categories";
   return instance2.get(URL_BACKEND);
};

const getProductsNewSofa = () => {
   const URL_BACKEND = "/products_sofa";
   return instance2.get(URL_BACKEND);
};

const getFeaturedFurniture = () => {
   const URL_BACKEND = "/feature-products";
   return instance2.get(URL_BACKEND);
};

export {
   getSection,
   getExploreCategories,
   getAllProductsPopular,
   removeWishlist,
   getWishList,
   addWishList,
   deleteWishList,
   getAllBrandsProducts,
   getAllBlogsList,
   getAllCart,
   addCartList,
   getCollectionProducts,
   getArrivalsProducts,
   getSmartCategories,
   getCommentsAll,
   getBlogsAllList,
   getAllThumbnail,
   getCategoriesSofa,
   getProductsNewSofa,
   getFeaturedFurniture,
};
