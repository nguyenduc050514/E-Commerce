import classNames from "classnames/bind";
import styles from "@components/productsHead/product.module.scss";
const cx = classNames.bind(styles);
const ProductsComponent = ({ heading, desc, more = "Browse All" }) => {
   return (
      <div className={cx("products__header")}>
         <div>
            <h1 className={cx("products__heading")}>{heading}</h1>
            <p className={cx("products__desc")}>{desc}</p>
         </div>
         <button className={cx("products__more")}>{more}</button>
      </div>
   );
};
export default ProductsComponent;
