import classNames from "classnames/bind";
import styles from "@pages/categories/smartWatch/collection/collection.module.scss";
import SelectionHeader from "../components/section-header";
import CartsProducts from "@components/common/Card/Cards";
import { useEffect, useState } from "react";
import { getCollectionProducts } from "@services/api.service";
const cx = classNames.bind(styles);
const Collection = () => {
   const [collectionProducts, setCollectionProducts] = useState([]);

   const fetchCollectionProducts = async () => {
      try {
         const response = await getCollectionProducts();
         if (response?.data) {
            setCollectionProducts(response?.data);
         }
      } catch (error) {
         console.log("Error Not Found", error.message);
      }
   };
   useEffect(() => {
      fetchCollectionProducts();
   }, []);
   return (
      <div className={cx("collection")}>
         <div className={cx("collection-container")}>
            <SelectionHeader heading="Our Best Collection" action={true} />
            <div className={cx("collection-wrapper")}>
               <CartsProducts productsPopular={collectionProducts} />
            </div>
         </div>
      </div>
   );
};
export default Collection;
