import styles from "@components/explore/wrapper.module.scss";
import { getExploreCategories } from "@services/api.service";
import { useEffect, useState } from "react";
const ExploreWrapper = () => {
   const [categories, setCategories] = useState([]);

   const getCategories = async () => {
      const response = await getExploreCategories();
      if (response?.data) {
         setCategories(response.data);
      }
   };
   useEffect(() => {
      getCategories();
   }, []);
   return (
      <div className={styles.explore__wrapper}>
         {categories.map(({ id, category, image }) => (
            <div key={id} className={styles.explore__card}>
               <div className={styles["explore__card--media"]}>
                  <figure className={styles["explore__card--image"]}>
                     <img
                        src={image}
                        alt="Explore, find exactly what you need"
                        className={styles["explore__card--img"]}
                     />
                  </figure>
               </div>
               <h3 className={styles["explore__card--title"]}>{category}</h3>
            </div>
         ))}
      </div>
   );
};
export default ExploreWrapper;
