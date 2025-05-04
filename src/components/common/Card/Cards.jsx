import classNames from "classnames/bind";
import styles from "@components/common/Card/card.module.scss";
import heart from "@assets/icons/heart.svg";
import filledHeart from "@assets/icons/fillHeart.svg";
import start from "@assets/icons/start.svg";
import OverView from "@components/common/overview";
import HandleCard from "./handleCard";
import { useState } from "react";
import CartNotificationModal from "../cart/CartNotification";
const cx = classNames.bind(styles);

const CartsProducts = ({ productsPopular }) => {
   const { wishlist, showOverview, handleWishlistToggle, handleAddCart } =
      HandleCard();
   const [isShowNotification, setShowNotification] = useState(false);
   const [addedProductId, setAddedProductId] = useState(null);
   // Function to handle adding to cart and showing notification
   const handleAddToCart = (
      id,
      category,
      image,
      price,
      rating,
      title,
      label,
      price_old = null
   ) => {
      // Call the original handleAddCart function
      price_old
         ? handleAddCart(
              id,
              category,
              image,
              price,
              rating,
              title,
              label,
              price_old
           )
         : handleAddCart(id, category, image, price, rating, title, label);

      // Set the added product ID and show notification
      setAddedProductId(id);
      setShowNotification(true);
   };

   // Function to close the notification modal
   const closeNotification = () => {
      setShowNotification(false);
   };

   return (
      <>
         {productsPopular.map(
            ({
               id,
               buttonText,
               category,
               image,
               price,
               rating,
               title,
               label,
               price_old,
            }) => (
               <div key={id} className={cx("product__card")}>
                  <figure className={cx("product__image")}>
                     <img
                        src={image}
                        alt={title}
                        className={cx("product__img")}
                     />
                     <div
                        className={`${cx("product__overview")} ${
                           wishlist[showOverview] && showOverview === id
                              ? cx("product__overview_show")
                              : ""
                        }`}
                     >
                        <OverView />
                     </div>
                     {label && <span className={cx("label")}>{label}</span>}
                     {!rating.count && (
                        <span className={cx("out__stock")}>OUT OF STOCK</span>
                     )}
                  </figure>
                  <div>
                     <div className={cx("product__row")}>
                        <p className={cx("product__title")}>{category}</p>
                        <img
                           src={wishlist[id] ? filledHeart : heart}
                           alt={
                              wishlist[id]
                                 ? "Đã thêm vào danh sách yêu thích"
                                 : "Thêm vào danh sách yêu thích"
                           }
                           title="Love"
                           onClick={() => handleWishlistToggle(id)}
                           style={{
                              filter: wishlist[id]
                                 ? "none"
                                 : "brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(80%) contrast(100%",
                              cursor: "pointer",
                           }}
                        />
                     </div>
                     <h2 className={cx("product__name")}>{title}</h2>
                     <div className={cx("product__row2")}>
                        <div className={cx("product__rating")}>
                           <img src={start} alt="" />
                           <p>
                              {rating.stars} ({rating.count})
                           </p>
                        </div>
                        <div className={cx("product__sale")}>
                           <span
                              className={
                                 price_old
                                    ? cx("product__price--line_through")
                                    : cx("product__price")
                              }
                           >
                              {price}
                           </span>
                           {price_old && (
                              <span className={cx("product__price--old")}>
                                 {price_old}
                              </span>
                           )}
                        </div>
                     </div>
                     <button
                        className={cx("product__add-cart")}
                        onClick={() =>
                           handleAddToCart(
                              id,
                              category,
                              image,
                              price,
                              rating,
                              title,
                              label,
                              price_old
                           )
                        }
                     >
                        {buttonText}
                     </button>
                  </div>
               </div>
            )
         )}
         <CartNotificationModal
            isOpen={isShowNotification}
            onClose={closeNotification}
            addedProductId={addedProductId}
            isTrue={false}
         />
      </>
   );
};

export default CartsProducts;
