import classNames from "classnames/bind";
import styles from "@pages/categories/furniture/common/Card.module.scss";
import heart from "@assets/icons/heart.svg";
import filledHeart from "@assets/icons/fillHeart.svg";
import start from "@assets/icons/start.svg";
import OverView from "@components/common/overview";
import CartNotificationModal from "@components/common/cart/CartNotification";
import useCartManager from "@components/common/Card/handleAddCart";
const cx = classNames.bind(styles);
const Card = ({ productsFurniture }) => {
   const {
      isShowNotification,
      wishlist,
      showOverview,
      handleWishlistToggle,
      total,
      productNotification,
      handleAddToCart,
      closeNotification,
      setProductNotification,
      setShowNotification,
      cartsProducts,
   } = useCartManager();
   return (
      <>
         {productsFurniture.map(
            ({
               id,
               category,
               image,
               price,
               rating,
               title,
               label,
               price_old,
               new_products,
               best_products,
            }) => (
               <div key={id}>
                  {(new_products || best_products) && (
                     <div className={cx("products-item")}>
                        <figure className={cx("products-item__image")}>
                           <img
                              src={image}
                              alt=""
                              className={cx("products-item__img")}
                           />
                           <div
                              className={`${cx("products-item__overview")} ${
                                 wishlist[showOverview] && showOverview === id
                                    ? cx("products-item__overview_show")
                                    : ""
                              }`}
                           >
                              <OverView />
                           </div>
                        </figure>
                        <div className={cx("products-item__row")}>
                           {category && (
                              <p className={cx("products-item__label")}>
                                 {category}
                              </p>
                           )}
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
                        {title && (
                           <h3 className={cx("products-item__heading")}>
                              {title}
                           </h3>
                        )}
                        {rating && (
                           <div className={cx("products-item__row")}>
                              <span className={cx("products-item__rating")}>
                                 <img src={start} alt="" />
                                 {rating.start} ({rating.count})
                              </span>
                              {price && (
                                 <p className={cx("products-item__price")}>
                                    ${price}
                                 </p>
                              )}
                           </div>
                        )}
                        <button
                           className={cx("products-item__add-cart")}
                           onClick={() => {
                              const productToNotify = {
                                 id,
                                 category,
                                 image,
                                 price,
                                 rating,
                                 title,
                                 label,
                                 price_old,
                                 quantity: 1,
                              };
                              setProductNotification(productToNotify);
                              handleAddToCart(
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
                           }}
                        >
                           Add to cart
                        </button>
                     </div>
                  )}
               </div>
            )
         )}
         <CartNotificationModal
            isOpen={isShowNotification}
            onClose={closeNotification}
            isTrue={false}
            totalAmount={total}
            productNotification={productNotification}
            cartsProducts={cartsProducts}
         />
      </>
   );
};
export default Card;
