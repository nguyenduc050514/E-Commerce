import classNames from "classnames/bind";
import styles from "@pages/categories/furniture/featured/featured.module.scss";
const cx = classNames.bind(styles);
import start from "@assets/icons/start.svg";
import { useEffect, useState } from "react";
import { getFeaturedFurniture } from "@services/api.service";
const FeaturedProducts = () => {
   const [featureProducts, setFeatureProducts] = useState([]);
   const fetchFeatureProducts = async () => {
      try {
         const response = await getFeaturedFurniture();
         if (response.data) {
            setFeatureProducts(response.data);
         }
      } catch (error) {
         console.log(error.message);
      }
   };

   useEffect(() => {
      fetchFeatureProducts();
   }, []);
   return (
      <div className={cx("feature")}>
         <div className={cx("feature-container")}>
            <h1 className={cx("feature-heading")}>Featured Products</h1>
            <div className={cx("feature-list")}>
               {featureProducts.map(
                  ({ id, title, price, review_count, rating, image }) => (
                     <div key={id} className={cx("feature-item")}>
                        <img
                           src={image}
                           alt="Featured Products"
                           className={cx("feature-img")}
                        />
                        <h2 className={cx("feature-title")}>{title}</h2>
                        <span className={cx("feature-price")}>{price}</span>
                        <div className={cx("feature-row")}>
                           <div>
                              {Array.from({ length: rating }, (_, i) => (
                                 <img key={i} src={start} alt="start" />
                              ))}
                           </div>
                           <p className={cx("feature-review")}>
                              ({review_count} reviews)
                           </p>
                        </div>
                     </div>
                  )
               )}
            </div>
         </div>
      </div>
   );
};
export default FeaturedProducts;
