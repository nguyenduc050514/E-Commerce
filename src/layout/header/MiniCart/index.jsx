import classNames from "classnames/bind";
import styles from "@layout/header/MiniCart/miniCart.module.scss";
import { useMemo } from "react";
const cx = classNames.bind(styles);
const MiniCart = ({ cartsProducts }) => {
   const total = useMemo(() => {
      return cartsProducts.reduce((sum, item) => {
         const price = item.price_old
            ? Number(item.price_old)
            : Number(item.price);
         return sum + price * item.quantity;
      }, 0);
   }, [cartsProducts]);
   return (
      <div className={cx("mini-cart")}>
         {cartsProducts.map(({ image, title, price, price_old, quantity }) => (
            <div className={cx("mini-cart__header")}>
               <img
                  src={image}
                  alt=""
                  className={cx("mini-cart__header__img")}
               />
               <div className={cx("mini-cart__header__title")}>
                  <h3 className={cx("mini-cart__header__title-name")}>
                     {title}
                  </h3>
                  <span className={cx("mini-cart__header__title-price")}>
                     {price ? price : price_old} x{quantity}
                  </span>
               </div>
               <div className={cx("mini-cart__header__close")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                     ></path>
                  </svg>
               </div>
            </div>
         ))}
         <div className={cx("mini-cart__total")}>
            <span className={cx("mini-cart__total__text")}>Tổng Cộng</span>
            <span className={cx("mini-cart__total__price")}>{total}$</span>
         </div>
         <div className={cx("mini-cart__checkout")}>
            <button className={cx("mini-cart__checkout__btn")}>
               Tiến hành thanh toán
            </button>
         </div>
      </div>
   );
};
export default MiniCart;
