// src/context/WishlistContext.js
import useCard from "@hooks/useCard";
import { createContext, useContext } from "react";
const WishlistContext = createContext();
const WishlistProvider = ({ children }) => {
   const cardHook = useCard(); // Gọi useCart để lấy wishlist, showOverview, handleWishlistToggle
   return (
      <WishlistContext.Provider value={cardHook}>
         {children}
      </WishlistContext.Provider>
   );
};
const useWishlist = () => useContext(WishlistContext);
// eslint-disable-next-line react-refresh/only-export-components
export { WishlistProvider, useWishlist };
