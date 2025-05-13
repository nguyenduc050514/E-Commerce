import classNames from "classnames/bind";
import styles from "@pages/categories/furniture/productsNew/products.module.scss";

import { useEffect, useState } from "react";
import { getProductsNewSofa } from "@services/api.service";
import { Link } from "react-router";
import Card from "../common/Card";
const cx = classNames.bind(styles);
const Products = () => {
   const [productsFurniture, setProductsFurniture] = useState([]);

   const fetchProducts = async () => {
      try {
         const response = await getProductsNewSofa();
         if (response.data) {
            const newProductsSofa = response?.data.filter(
               (p) => p.new_products
            );
            setProductsFurniture(newProductsSofa);
         }
      } catch (error) {
         console.error(error.message);
      }
   };
   useEffect(() => {
      fetchProducts();
   }, []);
   return (
      <>
         <div className={cx("products")}>
            <div className={cx("products-container")}>
               <h1 className={cx("products-heading")}>New Products</h1>
               <div className={cx("products-list")}>
                  <Card productsFurniture={productsFurniture} />
               </div>
            </div>
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
      </>
   );
};
export default Products;
