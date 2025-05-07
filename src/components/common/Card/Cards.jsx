import classNames from "classnames/bind";
import styles from "@components/common/Card/card.module.scss";
import heart from "@assets/icons/heart.svg";
import filledHeart from "@assets/icons/fillHeart.svg";
import start from "@assets/icons/start.svg";
import OverView from "@components/common/overview";
import CartNotificationModal from "../cart/CartNotification";
import useCartManager from "@components/common/Card/handleAddCart";
const cx = classNames.bind(styles);
const CartsProducts = ({ productsPopular }) => {
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
                     {image && (
                        <img
                           src={image}
                           alt={title}
                           className={cx("product__img")}
                        />
                     )}
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
                        {category && (
                           <p className={cx("product__title")}>{category}</p>
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
                     {title && <h2 className={cx("product__name")}>{title}</h2>}
                     <div className={cx("product__row2")}>
                        <div className={cx("product__rating")}>
                           <img src={start} alt="" />
                           <p>
                              {rating.stars} ({rating.count})
                           </p>
                        </div>
                        <div className={cx("product__sale")}>
                           {price && (
                              <span
                                 className={
                                    price_old
                                       ? cx("product__price--line_through")
                                       : cx("product__price")
                                 }
                              >
                                 ${price}
                              </span>
                           )}
                           {price_old && (
                              <span className={cx("product__price--old")}>
                                 ${price_old}
                              </span>
                           )}
                        </div>
                     </div>
                     {buttonText && (
                        <button
                           className={cx("product__add-cart")}
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
                              // Không cần gọi handleClick nữa vì đã đặt productNotification
                              setShowNotification(true);
                           }}
                        >
                           {buttonText}
                        </button>
                     )}
                  </div>
               </div>
            )
         )}
         <CartNotificationModal
            isOpen={isShowNotification}
            onClose={closeNotification}
            isTrue={false}
            totalAmount={total}
            productNotification={productNotification}
            // handleProductModal={handleProductModal}
            cartsProducts={cartsProducts}
         />
      </>
   );
};

export default CartsProducts;
