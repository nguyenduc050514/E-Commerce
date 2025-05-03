import { useCallback, useEffect, useState } from "react";
import {
   addWishList,
   deleteWishList,
   getWishList,
} from "@services/api.service";
const useCard = () => {
   const [showOverview, setShowOverview] = useState(null);
   const [wishlist, setWishlist] = useState({});
   const fetchWishlist = async () => {
      try {
         const response = await getWishList();
         const wishlistObject = {};
         response.data.forEach((item) => {
            wishlistObject[item.id] = true;
         });
         setWishlist(wishlistObject);
      } catch (error) {
         console.error("Error fetching wishlist:", error);
      }
   };
   useEffect(() => {
      fetchWishlist();
   }, []);

   // Handle timeout for showing overview
   useEffect(() => {
      let timer;
      if (showOverview !== null) {
         timer = setTimeout(() => {
            setShowOverview(null);
         }, 5000);
      }
      return () => {
         if (timer) clearTimeout(timer);
      };
   }, [showOverview]);

   // Toggle wishlist item and persist to JSON server
   const handleWishlistToggle = useCallback(
      async (id) => {
         const newValue = !wishlist[id];
         setWishlist((prev) => ({
            ...prev,
            [id]: newValue,
         }));
         setShowOverview(id);
         try {
            if (newValue) {
               await addWishList(id);
            } else {
               await deleteWishList(id);
            }
         } catch (error) {
            console.error("Error updating wishlist:", error);
            setWishlist((prev) => ({
               ...prev,
               [id]: !newValue,
            }));
         }
      },
      [wishlist]
   );

   return {
      wishlist,
      showOverview,
      handleWishlistToggle,
   };
};

export default useCard;
