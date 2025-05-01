import styles from "@components/productsHead/product.module.scss";
const ProductsComponent = ({ heading, desc }) => {
   return (
      <div className={styles.products__header}>
         <div>
            <h1 className={styles.products__heading}>{heading}</h1>
            <p className={styles.products__desc}>{desc}</p>
         </div>
         <button className={styles.products__more}>Browse All</button>
      </div>
   );
};
export default ProductsComponent;
