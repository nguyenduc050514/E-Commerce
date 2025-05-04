import { useCallback, useEffect, useRef, useState } from "react";
import {
   addCartList,
   addWishList,
   deleteWishList,
   getAllCart,
   getWishList,
} from "@services/api.service";

const useCard = () => {
   const [showOverview, setShowOverview] = useState(null);
   const [wishlist, setWishlist] = useState({});
   const [cartsProducts, setCartProducts] = useState([]);
   const isMountedRef = useRef(true);
   const timeoutRef = useRef(null);

   const fetchCartsList = async () => {
      try {
         const response = await getAllCart();
         if (isMountedRef.current && response?.data) {
            setCartProducts(response.data);
         }
      } catch (error) {
         console.error("Error fetching cartsList:", error);
      }
   };

   const fetchWishlist = async () => {
      try {
         const response = await getWishList();
         if (isMountedRef.current) {
            const wishlistObject = {};
            response.data.forEach((item) => {
               wishlistObject[item.id] = true;
            });
            setWishlist(wishlistObject);
         }
      } catch (error) {
         console.error("Error fetching wishlist:", error);
      }
   };

   useEffect(() => {
      isMountedRef.current = true;
      const fetchData = async () => {
         await Promise.all([fetchCartsList(), fetchWishlist()]);
      };
      fetchData();
      return () => {
         isMountedRef.current = false;
      };
   }, []);

   useEffect(() => {
      if (showOverview !== null) {
         if (timeoutRef.current) clearTimeout(timeoutRef.current);
         timeoutRef.current = setTimeout(() => {
            setShowOverview(null);
         }, 5000);
      }
      return () => {
         if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
   }, [showOverview]);

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
            if (isMountedRef.current) {
               setWishlist((prev) => ({
                  ...prev,
                  [id]: !newValue,
               }));
            }
         }
      },
      [wishlist]
   );
   const handleAddCart = useCallback(
      async (
         id,
         category,
         image,
         price,
         rating,
         title,
         label,
         price_old = null
      ) => {
         try {
            if (!id) return;

            const existingProduct = cartsProducts.find(
               (item) => item.id === id
            );
            const newQuantity = existingProduct
               ? existingProduct.quantity + 1
               : 1;

            // Update state first for immediate UI feedback
            setCartProducts((prev) =>
               existingProduct
                  ? prev.map((item) =>
                       item.id === id
                          ? { ...item, quantity: newQuantity }
                          : item
                    )
                  : [
                       ...prev,
                       {
                          id,
                          category,
                          image,
                          price,
                          rating,
                          title,
                          label,
                          price_old,
                          quantity: 1,
                       },
                    ]
            );

            // Call backend using Axios
            await addCartList(
               id,
               category,
               image,
               price,
               rating,
               title,
               label,
               price_old,
               newQuantity
            );
         } catch (error) {
            // Rollback state in case of error
            setCartProducts((prev) => prev.filter((item) => item.id !== id));
            console.error("Error updating cart:", error);
         }
      },
      [cartsProducts]
   );
   return {
      wishlist,
      showOverview,
      handleWishlistToggle,
      cartsProducts,
      handleAddCart,
   };
};

export default useCard;
