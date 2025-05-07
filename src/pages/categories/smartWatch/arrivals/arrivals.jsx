import classNames from "classnames/bind";
import styles from "@pages/categories/smartWatch/arrivals/arrivals.module.scss";
import SelectionHeader from "../components/section-header";
import CartsProducts from "@components/common/Card/Cards";
import { useEffect, useState } from "react";
import { getArrivalsProducts } from "@services/api.service";
const cx = classNames.bind(styles);
const Arrivals = () => {
   const [arrivalsProducts, setArrivalsProducts] = useState([]);
   const fetchArrivalsProducts = async () => {
      try {
         const response = await getArrivalsProducts();
         if (response?.data) {
            setArrivalsProducts(response?.data);
         }
      } catch (error) {
         console.log("Error Not Found", error.message);
      }
   };
   useEffect(() => {
      fetchArrivalsProducts();
   }, []);
   return (
      <div className={cx("arrivals")}>
         <div className={cx("arrivals-container")}>
            <SelectionHeader heading="New Arrivals" action={true} />
            <div className={cx("arrivals-wrapper")}>
               <CartsProducts productsPopular={arrivalsProducts} />
            </div>
         </div>
      </div>
   );
};
export default Arrivals;
