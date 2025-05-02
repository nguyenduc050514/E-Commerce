import classNames from "classnames/bind";
import styles from "@layout/popular/popular.module.scss";
import ProductsComponent from "@components/productsHead";
import BannerSale from "@assets/images/bannerSale.svg";
import { useEffect, useState } from "react";
import { getAllProductsPopular } from "@services/api.service";
import CartsProducts from "@components/common/Card/Cards";
const cx = classNames.bind(styles);
const LimitedOfferAlert = () => {
   const [saleAllProducts, setSaleAllProducts] = useState([]);
   const [firstProduct, setFirstProduct] = useState([]);
   const getAllSale = async () => {
      try {
         const response = await getAllProductsPopular();
         if (response?.data) {
            setSaleAllProducts(response?.data.sale.slice(1));
            setFirstProduct(response?.data?.sale.slice(0, 1));
         }
      } catch (error) {
         console.error(error.message);
      }
   };
   useEffect(() => {
      getAllSale();
   }, []);
   console.log(firstProduct);
   return (
      <div className={cx("popular")}>
         <div className={cx("popular__container")}>
            <ProductsComponent
               heading="Hurry, don’t miss out on this offers"
               desc=""
            />
            <div className={cx("banner-sale")}>
               <img src={BannerSale} alt="" />
               <CartsProducts productsPopular={firstProduct} />
            </div>
            <div className={cx("popular__wrapper")}>
               <CartsProducts productsPopular={saleAllProducts} />
            </div>
         </div>
      </div>
   );
};
export default LimitedOfferAlert;
