
import styles from "@components/common/Cart/carts.module.scss";
import heart from "@assets/icons/heart.svg";
import filledHeart from "@assets/icons/fillHeart.svg";
import start from "@assets/icons/start.svg";
import OverView from "@components/common/overview";
import handleCart from "./handleCart";
const CartsProducts = ({ productsPopular }) => {
   const { wishlist, showOverview, handleWishlistToggle } = handleCart();
   return (
      <div className={styles.product__wrapper}>
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
            }) => (
               <div key={id} className={styles.product__card}>
                  <figure className={styles.product__image}>
                     <img
                        src={image}
                        alt={title}
                        className={styles.product__img}
                     />
                     <div
                        className={`${styles.product__overview} ${
                           wishlist[showOverview] && showOverview === id
                              ? styles.product__overview_show
                              : ""
                        }`}
                     >
                        <OverView />
                     </div>
                     {label && <span className={styles.label}>{label}</span>}
                     <span className={styles.out__stock}>OUT OF STOCK</span>
                  </figure>
                  <div>
                     <div className={styles.product__row}>
                        <p className={styles.product__title}>{category}</p>
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
                     <h2 className={styles.product__name}>{title}</h2>
                     <div className={styles.product__row2}>
                        <div className={styles.product__rating}>
                           <img src={start} alt="" />
                           <p>
                              {rating.stars} ({rating.count})
                           </p>
                        </div>
                        <span className={styles.product__price}>{price}</span>
                     </div>
                     <button className={styles["product__add-cart"]}>
                        {buttonText}
                     </button>
                  </div>
               </div>
            )
         )}
      </div>
   );
};

export default CartsProducts;
