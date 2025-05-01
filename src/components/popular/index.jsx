import ProductsComponent from "@components/productsHead";
import { getAllProductsPopular } from "@services/api.service";
import { useEffect, useState } from "react";
import styles from "@components/popular/popular.module.scss";
import CartsProducts from "@components/common/Cart/Carts";
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
      <div className={styles.popular}>
         <div className={styles.popular__container}>
            <ProductsComponent
               heading="Our popular products"
               desc="Browse our most popular products and make your day more beautiful and glorious."
               more="Browse All"
            />
            <CartsProducts productsPopular={productsPopular} />
         </div>
      </div>
   );
};
export default Popular;
