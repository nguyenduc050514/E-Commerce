import classNames from "classnames/bind";
import styles from "@pages/categories/furniture/bestFurniture/bestfurniture.module.scss";
import { useEffect, useState } from "react";
import { getProductsNewSofa } from "@services/api.service";
import Card from "../common/Card";
import { Link } from "react-router";
const cx = classNames.bind(styles);
const BestFurniture = () => {
   const [bestProducts, setBestProducts] = useState([]);

   const fetchBestProducts = async () => {
      try {
         const response = await getProductsNewSofa();
         if (response?.data) {
            const bestProductsSofa = response?.data.filter(
               (p) => p.best_products
            );
            setBestProducts(bestProductsSofa);
         }
      } catch (error) {
         console.error(error.message);
      }
   };
   useEffect(() => {
      fetchBestProducts();
   }, []);
   return (
      <div className={cx("best")}>
         <div className={cx("best-container")}>
            <h1 className={cx("best-heading")}>Find YOur Best Furniture</h1>
            <div className={cx("best-list")}>
               <Card productsFurniture={bestProducts} />
            </div>

            <div className={cx("view-all")}>
               <Link
                  to={{
                     pathname: "/pages/products-furniture",
                  }}
                  className={cx("view-all-action")}
               >
                  VIEW ALL
               </Link>
            </div>
         </div>
      </div>
   );
};
export default BestFurniture;
