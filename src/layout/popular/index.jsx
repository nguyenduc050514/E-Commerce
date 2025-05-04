import classNames from "classnames/bind";
import ProductsComponent from "@components/productsHead";
import { getAllProductsPopular } from "@services/api.service";
import { useEffect, useState } from "react";
import styles from "@layout/popular/popular.module.scss";
import CartsProducts from "@components/common/Card/Cards";
const cx = classNames.bind(styles);
const Popular = () => {
   const [productsPopular, setProductsPopular] = useState([]);

   const getProductPopular = async () => {
      try {
         const response = await getAllProductsPopular();
         setProductsPopular(response.data?.popular);
      } catch (error) {
         console.error(error.message);
      }
   };
   useEffect(() => {
      getProductPopular();
   }, []);
   return (
      <div className={cx("popular")}>
         <div className={cx("popular__container")}>
            <ProductsComponent
               heading="Our popular products"
               desc="Browse our most popular products and make your day more beautiful and glorious."
               more="Browse All"
            />
            <div className={cx("popular__wrapper")}>
               <CartsProducts productsPopular={productsPopular} />
            </div>
         </div>
      </div>
   );
};
export default Popular;
