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

const getAllCart = () => {
   const URL_BACKEND = "/carts";
   return instance2.get(URL_BACKEND);
};

// Function to add/update cart items in the backend
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
      // Check if item exists
      const response = await instance2.get(`http://localhost:3001/carts`, {
         params: { id: id },
      });

      const existingItems = response.data;

      if (existingItems.length > 0) {
         // Item exists - update with PATCH request
         const existingItem = existingItems[0];
         const updatedItem = {
            ...existingItem,
            quantity: quantity,
         };

         await instance2.patch(
            `http://localhost:3001/carts/${existingItem.id}`,
            updatedItem
         );
      } else {
         // Item doesn't exist - create with POST request
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

         await instance2.post("http://localhost:3001/carts", newCartItem);
      }

      // Show success modal/notification (you already have this implemented)
   } catch (error) {
      console.error("Error in addCartList:", error);
      throw error;
   }
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
};
