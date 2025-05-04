import classNames from "classnames/bind";
import ProductsComponent from "@components/productsHead";
import styles from "@layout/popular/popular.module.scss";
import CartsProducts from "@components/common/Card/Cards";
import { useEffect, useState } from "react";
import { getAllProductsPopular } from "@services/api.service";
const cx = classNames.bind(styles);
const NewPopular = () => {
   const [NewProducts, setNewProducts] = useState([]);
   const getAllNewProducts = async () => {
      try {
         const response = await getAllProductsPopular();
         if (response?.data) {
            setNewProducts(response?.data?.new);
         }
      } catch (error) {
         console.error(error.message);
      }
   };
   useEffect(() => {
      getAllNewProducts();
   }, []);
   return (
      <div className={cx("popular")}>
         <div className={cx("popular__container")}>
            <ProductsComponent
               heading="Our New Products"
               desc="Browse our new products and make your day more beautiful and glorious."
               more="Browse All"
            />
            <div className={cx("popular__wrapper")}>
               <CartsProducts productsPopular={NewProducts} />
            </div>
         </div>
      </div>
   );
};
export default NewPopular;
