import classNames from "classnames/bind";
import styles from "@pages/categories/smartWatch/explore/explore.module.scss";
import { useEffect, useState } from "react";
import { getSmartCategories } from "@services/api.service";
const cx = classNames.bind(styles);
const ExploreCategories = () => {
   const [SmartCategories, setSmartCategories] = useState([]);

   const fetchSmartCategories = async () => {
      try {
         const response = await getSmartCategories();
         if (response?.data) {
            setSmartCategories(response.data);
         }
         console.log(response);
      } catch (error) {
         console.error("Server Not Found", error.message);
      }
   };
   useEffect(() => {
      fetchSmartCategories();
   }, []);
   return (
      <div className={cx("explore")}>
         <div className={cx("explore-container")}>
            <div className={cx("explore-header")}>
               <div className={cx("explore-header__heading")}>
                  Explore, find exactly what you need
               </div>
               <div className={cx("explore-wrapper")}>
                  {SmartCategories &&
                     SmartCategories.map(({ id, title, image }) => (
                        <div key={id} className={cx("explore-item")}>
                           <img
                              src={image}
                              alt=""
                              className={cx("explore-item__img")}
                           />
                           <h3 className={cx("explore-item__title")}>
                              {title}
                           </h3>
                        </div>
                     ))}
               </div>
            </div>
         </div>
      </div>
   );
};
export default ExploreCategories;
