import styles from "@components/productsHead/product.module.scss";
const ProductsComponent = ({ heading, desc, more = "Browse All" }) => {
   return (
      <div className={styles.products__header}>
         <div>
            <h1 className={styles.products__heading}>{heading}</h1>
            <p className={styles.products__desc}>{desc}</p>
         </div>
         <button className={styles.products__more}>{more}</button>
      </div>
   );
};
export default ProductsComponent;
