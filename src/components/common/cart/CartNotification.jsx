import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "@components/common/cart/cart.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const CartNotificationModal = ({ isOpen = false, onClose, addedProductId }) => {
   const [cartItems, setCartItems] = useState([]);
   const [totalAmount, setTotalAmount] = useState(0);
   const [totalItems, setTotalItems] = useState(0);
   useEffect(() => {
      if (isOpen && addedProductId) {
         fetchCartData();
      }
   }, [isOpen, addedProductId]);

   const fetchCartData = async () => {
      try {
         // Fetch all cart items
         const response = await axios.get("http://localhost:3001/carts");
         setCartItems(response.data);

         // Calculate total amount and total items
         const total = response.data.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
         );
         const itemCount = response.data.reduce(
            (count, item) => count + item.quantity,
            0
         );

         setTotalAmount(total);
         setTotalItems(itemCount);
      } catch (error) {
         console.error("Error fetching cart data:", error);
      }
   };
   if (!isOpen) return null;

   const addedProduct = cartItems.find((item) => item.id === addedProductId);

   return (
      <div className={cx("cart-notification-overlay")}>
         <div className={cx("cart-notification-modal")}>
            <div className={cx("cart-notification-product")}>
               <div className="success-message">
                  <span>Sản phẩm đã được thêm vào giỏ hàng</span>
               </div>
               {addedProduct && (
                  <div className={cx("product-info")}>
                     <div className={cx("product-image")}>
                        <img
                           src={addedProduct.image}
                           alt={addedProduct.title}
                        />
                     </div>
                     <div className={cx("product-details")}>
                        <h3 className={cx("product-title")}>
                           {addedProduct.title}
                        </h3>
                        <p className={cx("product-price")}>
                           {addedProduct.price.toLocaleString()}đ
                        </p>
                     </div>
                  </div>
               )}
            </div>

            {/* Right side - Cart summary */}
            <div className={cx("cart-summary")}>
               <button onClick={onClose} className={cx("close-button")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </button>

               <h2 className={cx("cart-title")}>
                  Giỏ hàng của bạn ({totalItems} sản phẩm)
               </h2>

               <div className={cx("total-section")}>
                  <span className="total-label">Tổng tiền:</span>
                  <span className="total-amount">
                     {totalAmount.toLocaleString()}đ
                  </span>
               </div>

               <button className={cx("checkout-button")}>
                  Tiến hành thanh toán
               </button>
            </div>
         </div>
      </div>
   );
};

export default CartNotificationModal;
