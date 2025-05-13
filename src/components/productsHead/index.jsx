import classNames from "classnames/bind";
import styles from "@components/productsHead/product.module.scss";
import Button from "@components/common/button/button";
const cx = classNames.bind(styles);
const ProductsComponent = ({ heading, desc, more }) => {
   return (
      <div className={cx("products__header")}>
         <div>
            <h1 className={cx("products__heading")}>{heading}</h1>
            <p className={cx("products__desc")}>{desc}</p>
         </div>
         {more && (
            <Button
               children={more}
               minWidth="158px"
               background="#fff"
               color="#005D63"
               border="1px solid #005D63"
            />
         )}
      </div>
   );
};
export default ProductsComponent;
