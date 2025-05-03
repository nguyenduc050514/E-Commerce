import { useCallback, useEffect, useState } from "react";
import axios from "axios";

// JSON server API base URL - adjust to your configuration
const API_URL = "http://localhost:3001";

const useCart = () => {
   const [showOverview, setShowOverview] = useState(null);
   const [wishlist, setWishlist] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   // Load wishlist data from JSON server on component mount
   useEffect(() => {
      const fetchWishlist = async () => {
         try {
            setIsLoading(true);
            const response = await axios.get(`${API_URL}/wishlist`);

            // Convert array data to object format for easier usage
            const wishlistObject = {};
            response.data.forEach((item) => {
               wishlistObject[item.id] = true;
            });

            setWishlist(wishlistObject);
         } catch (error) {
            console.error("Error fetching wishlist:", error);
         } finally {
            setIsLoading(false);
         }
      };

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

         // Update local state immediately for responsiveness
         setWishlist((prev) => ({
            ...prev,
            [id]: newValue,
         }));

         setShowOverview(id);

         try {
            if (newValue) {
               // Add to wishlist in JSON server
               await axios.post(`${API_URL}/wishlist`, {
                  id,
                  addedAt: new Date().toISOString(),
               });
            } else {
               // Remove from wishlist in JSON server
               await axios.delete(`${API_URL}/wishlist/${id}`);
            }
         } catch (error) {
            console.error("Error updating wishlist:", error);
            // Revert local state if API call fails
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
      isLoading,
   };
};

export default useCart;
