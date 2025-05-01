import CartsProducts from "@components/common/Cart/Carts";
import styles from "@components/products/product.module.scss";
const ProductsComponent = () => {
   return (
      <div className={styles.products}>
         <div className={styles.products__container}>
            <div className={styles.products__header}>
               <div>
                  <h1 className={styles.products__heading}>
                     Our popular products
                  </h1>
                  <p className={styles.products__desc}>
                     Browse our most popular products and make your day more
                     beautiful and glorious.
                  </p>
               </div>
               <button className={styles.products__more}>Browse All</button>
            </div>
            <CartsProducts />
         </div>
      </div>
   );
};
export default ProductsComponent;
