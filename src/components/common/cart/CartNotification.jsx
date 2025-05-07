import styles from "@components/common/cart/cart.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const CartNotificationModal = ({
   isOpen = false,
   onClose,
   productNotification,
   totalAmount,
   cartsProducts,
}) => {
   if (!isOpen) return null;
   if (!productNotification) return null;
   return (
      <div className={cx("cart-notification-overlay")}>
         <div className={cx("cart-notification-modal")}>
            <div className={cx("cart-notification-product")}>
               <div className="success-message">
                  <span>Sản phẩm đã được thêm vào giỏ hàng</span>
               </div>
               <div className={cx("product-info")}>
                  <div className={cx("product-image")}>
                     <img
                        src={productNotification.image}
                        alt={productNotification.title}
                     />
                  </div>
                  <div className={cx("product-details")}>
                     <h3 className={cx("product-title")}>
                        {productNotification.title}
                     </h3>
                     <p className={cx("product-price")}>
                        {productNotification.price_old ||
                           productNotification.price}
                        $
                     </p>
                  </div>
               </div>
            </div>
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
                  Giỏ hàng của bạn ({cartsProducts.length} sản phẩm)
               </h2>
               <div className={cx("total-section")}>
                  <span className="total-label">Tổng tiền:</span>
                  <span className="total-amount">
                     {totalAmount?.toLocaleString
                        ? totalAmount.toLocaleString()
                        : totalAmount}
                     $
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
