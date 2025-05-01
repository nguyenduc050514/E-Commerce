import styles from "@components/common/Cart/carts.module.scss";
import heart from "@assets/icons/heart.svg";
import start from "@assets/icons/start.svg";
import OverView from "@components/common/overview";
import { useState } from "react";
const CartsProducts = ({ productsPopular }) => {
   const [isShowOver, setIsShowOver] = useState(null);
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
               wishlist,
            }) => (
               <div
                  key={id}
                  className={styles.product__card}
                  onMouseEnter={() => setIsShowOver(id)}
                  onMouseLeave={() => setIsShowOver(null)}
               >
                  <figure className={styles.product__image}>
                     <img
                        src={image}
                        alt="Mid Century Modern T-Shirt"
                        className={styles.product__img}
                     />
                     <div
                        className={`${styles.product__overview} ${
                           isShowOver === id
                              ? styles.product__overview_show
                              : ""
                        }`}
                     >
                        <OverView />
                     </div>
                  </figure>
                  <div>
                     <div className={styles.product__row}>
                        <p className={styles.product__title}>{category}</p>
                        <img src={heart} alt="" style={{ color: "#000" }} />
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
