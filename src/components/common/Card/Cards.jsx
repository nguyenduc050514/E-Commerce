import classNames from "classnames/bind";
import styles from "@components/common/Card/card.module.scss";
import heart from "@assets/icons/heart.svg";
import filledHeart from "@assets/icons/fillHeart.svg";
import start from "@assets/icons/start.svg";
import OverView from "@components/common/overview";
import handleCart from "./handleCart";
const cx = classNames.bind(styles);
const CartsProducts = ({ productsPopular }) => {
   const { wishlist, showOverview, handleWishlistToggle } = handleCart();
   console.log(wishlist);
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
                           onClick={() => handleWishlistToggle(id)}
                           style={{
                              filter: wishlist[id]
                                 ? "none" // Hiển thị màu nguyên bản nếu đã thêm vào wishlist
                                 : "brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(80%) contrast(100%",
                              cursor: "pointer", // Thêm con trỏ pointer khi hover
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
                     <button className={cx("product__add-cart")}>
                        {buttonText}
                     </button>
                  </div>
               </div>
            )
         )}
      </>
   );
};

export default CartsProducts;
