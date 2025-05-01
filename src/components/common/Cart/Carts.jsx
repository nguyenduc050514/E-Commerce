import styles from "@components/common/Cart/carts.module.scss";
import heart from "@assets/icons/heart.svg";
import start from "@assets/icons/start.svg";
const CartsProducts = () => {
   return (
      <div className={styles.product__wrapper}>
         <div className={styles.product__card}>
            <div>
               <figure className={styles.product__image}>
                  <img
                     src="https://i.imgur.com/iYARfmm.png"
                     alt="Mid Century Modern T-Shirt"
                     className={styles.product__img}
                  />
               </figure>
               <div>
                  <div className={styles.product__row}>
                     <p className={styles.product__title}>Men-Cloths</p>
                     <img src={heart} alt="" style={{ color: "#000" }} />
                  </div>
                  <h2 className={styles.product__name}>
                     Mid Century Modern T-Shirt
                  </h2>
                  <div className={styles.product__row2}>
                     <div className={styles.product__rating}>
                        <img src={start} alt="" />
                        <p>5.0 (18)</p>
                     </div>
                     <span className={styles.product__price}>$110</span>
                  </div>
                  <button className={styles["product__add-cart"]}>
                     Add to Cart
                  </button>
               </div>
            </div>
         </div>
         <div className={styles.product__card}>
            <div>
               <figure className={styles.product__image}>
                  <img
                     src="https://i.imgur.com/iYARfmm.png"
                     alt="Mid Century Modern T-Shirt"
                     className={styles.product__img}
                  />
               </figure>
               <div>
                  <div className={styles.product__row}>
                     <p className={styles.product__title}>Men-Cloths</p>
                     <img src={heart} alt="" style={{ color: "#000" }} />
                  </div>
                  <h2 className={styles.product__name}>
                     Mid Century Modern T-Shirt
                  </h2>
                  <div className={styles.product__row2}>
                     <div className={styles.product__rating}>
                        <img src={start} alt="" />
                        <p>5.0 (18)</p>
                     </div>
                     <span className={styles.product__price}>$110</span>
                  </div>
                  <button className={styles["product__add-cart"]}>
                     Add to Cart
                  </button>
               </div>
            </div>
         </div>
         <div className={styles.product__card}>
            <div>
               <figure className={styles.product__image}>
                  <img
                     src="https://i.imgur.com/iYARfmm.png"
                     alt="Mid Century Modern T-Shirt"
                     className={styles.product__img}
                  />
               </figure>
               <div>
                  <div className={styles.product__row}>
                     <p className={styles.product__title}>Men-Cloths</p>
                     <img src={heart} alt="" style={{ color: "#000" }} />
                  </div>
                  <h2 className={styles.product__name}>
                     Mid Century Modern T-Shirt
                  </h2>
                  <div className={styles.product__row2}>
                     <div className={styles.product__rating}>
                        <img src={start} alt="" />
                        <p>5.0 (18)</p>
                     </div>
                     <span className={styles.product__price}>$110</span>
                  </div>
                  <button className={styles["product__add-cart"]}>
                     Add to Cart
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
export default CartsProducts;
