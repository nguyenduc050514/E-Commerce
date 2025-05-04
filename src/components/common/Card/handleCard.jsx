// src/card/handleCart.jsx
import { useWishlist } from "@context/WishlistContext"; // Import useWishlist
function HandleCard() {
   const {
      wishlist,
      showOverview,
      handleWishlistToggle,
      handleAddCart,
      cartsProducts,
   } = useWishlist(); // Lấy wishlist và hàm toggle
   return {
      wishlist,
      handleWishlistToggle,
      showOverview,
      handleAddCart,
      cartsProducts,
   };
}
export default HandleCard;
