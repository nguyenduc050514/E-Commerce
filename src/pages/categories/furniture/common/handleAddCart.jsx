import { useWishlist } from "@context/WishlistContext";
import { useCallback, useMemo, useState } from "react";
/**
 * Custom hook quản lý logic thêm sản phẩm vào giỏ hàng và hiển thị thông báo
 * @returns {Object} Các giá trị và hàm cần thiết để quản lý giỏ hàng
 */
const useCartManager = () => {
   const {
      wishlist,
      showOverview,
      handleWishlistToggle,
      handleAddCart,
      cartsProducts,
   } = useWishlist();
   const [isShowNotification, setShowNotification] = useState(false);
   const [productNotification, setProductNotification] = useState(null);
   const handleAddToCart = useCallback(
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
            await handleAddCart(
               id,
               category,
               image,
               price,
               rating,
               title,
               label,
               price_old
            );
            setShowNotification(true);
         } catch (error) {
            console.error("Lỗi khi thêm vào giỏ hàng:", error);
         }
      },
      [handleAddCart]
   );
   const closeNotification = useCallback(() => {
      setShowNotification(false);
   }, []);

   const total = useMemo(() => {
      return cartsProducts.reduce((sum, item) => {
         const price = item.price_old
            ? Number(item.price_old)
            : Number(item.price);
         return sum + price * item.quantity;
      }, 0);
   }, [cartsProducts]);

   return {
      isShowNotification,
      setShowNotification,
      productNotification,
      setProductNotification,
      wishlist,
      showOverview,
      handleWishlistToggle,
      handleAddToCart,
      closeNotification,
      total,
      cartsProducts,
   };
};

export default useCartManager;
