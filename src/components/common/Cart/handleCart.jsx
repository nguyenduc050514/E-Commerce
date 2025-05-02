import { useCallback, useEffect, useState } from "react";

const useCart = () => {
   const [showOverview, setShowOverview] = useState(null);
   const [wishlist, setWishlist] = useState({});
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
   const handleWishlistToggle = useCallback((id) => {
      setWishlist((prev) => ({
         ...prev,
         [id]: !prev[id],
      }));
      setShowOverview(id);
   }, []);
   return {
      wishlist,
      showOverview,
      handleWishlistToggle,
   };
};

export default useCart;
