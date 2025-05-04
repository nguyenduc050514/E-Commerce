import classNames from "classnames/bind";
import styles from "@layout/brands/brand.module.scss";
import { useEffect, useState } from "react";
import { getAllBrandsProducts } from "@services/api.service";
const cx = classNames.bind(styles);
const Brands = () => {
   const [allBrandsProducts, setAllBrandsProducts] = useState([]);

   const getBrands = async () => {
      try {
         const response = await getAllBrandsProducts();
         if (response?.data) {
            setAllBrandsProducts(response?.data);
         }
      } catch (error) {
         console.error(error.message);
      }
   };
   useEffect(() => {
      getBrands();
   }, []);
   return (
      <div className={cx("brands")}>
         <div className={cx("container")}>
            <h1 className={cx("brands-heading")}>
               Explore from popular brands
            </h1>
            <div className={cx("brands-row")}>
               {allBrandsProducts.map(({ brand_id, brand_name, brand_img }) => (
                  <div key={brand_id} className={cx("brands-type")}>
                     <div className={cx("brands-image__rapper")}>
                        <figure className={cx("brands-image")}>
                           <img
                              src={brand_img}
                              alt=""
                              className={cx("brands-img")}
                           />
                        </figure>
                     </div>
                     <h3 className={cx("brands-name")}>{brand_name}</h3>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
export default Brands;
