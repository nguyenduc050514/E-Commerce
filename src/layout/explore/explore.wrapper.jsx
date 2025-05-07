import classNames from "classnames/bind";
import styles from "@layout/explore/wrapper.module.scss";
import { getExploreCategories } from "@services/api.service";
import { useEffect, useState } from "react";
import { Link } from "react-router";
const cx = classNames.bind(styles);
const ExploreWrapper = () => {
   const [categories, setCategories] = useState([]);
   const getCategories = async () => {
      try {
         const response = await getExploreCategories();
         if (response?.data) {
            setCategories(response.data);
         } else {
            console.error("Server Not found");
         }
      } catch (error) {
         console.log(error.message);
      }
   };
   useEffect(() => {
      getCategories();
   }, []);
   return (
      <div className={cx("explore__wrapper")}>
         {categories.map(({ id, category, image, to }) => (
            <Link
               to={`categories/${to}`}
               key={id}
               className={cx("explore__card")}
            >
               <div className={cx("explore__card--media")}>
                  <figure className={cx("explore__card--image")}>
                     <img
                        src={image}
                        alt="Explore, find exactly what you need"
                        className={cx("explore__card--img")}
                     />
                  </figure>
               </div>
               <h3 className={cx("explore__card--title")}>{category}</h3>
            </Link>
         ))}
      </div>
   );
};
export default ExploreWrapper;
