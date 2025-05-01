import styles from "@components/explore/wrapper.module.scss";
import { useState } from "react";
const ExploreWrapper = () => {
   const [categories, setCategories] = useState([]);


   return (
      <div className={styles["explore__wrapper"]}>
         <div className={styles["explore__card"]}>
            <div className={styles["explore__card--media"]}>
               <figure className={styles["explore__card--image"]}>
                  <img
                     src="https://i.imgur.com/BHcMloN.png"
                     alt="Explore, find exactly what you need"
                     className={styles["explore__card--img"]}
                  />
               </figure>
            </div>
            <h3 className={styles["explore__card--title"]}>Men Fashion</h3>
         </div>
         <div className={styles["explore__card"]}>
            <div className={styles["explore__card--media"]}>
               <figure className={styles["explore__card--image"]}>
                  <img
                     src="https://i.imgur.com/BHcMloN.png"
                     alt="Explore, find exactly what you need"
                     className={styles["explore__card--img"]}
                  />
               </figure>
            </div>
            <h3 className={styles["explore__card--title"]}>Men Fashion</h3>
         </div>
         <div className={styles["explore__card"]}>
            <div className={styles["explore__card--media"]}>
               <figure className={styles["explore__card--image"]}>
                  <img
                     src="https://i.imgur.com/BHcMloN.png"
                     alt="Explore, find exactly what you need"
                     className={styles["explore__card--img"]}
                  />
               </figure>
            </div>
            <h3 className={styles["explore__card--title"]}>Men Fashion</h3>
         </div>
         <div className={styles["explore__card"]}>
            <div className={styles["explore__card--media"]}>
               <figure className={styles["explore__card--image"]}>
                  <img
                     src="https://i.imgur.com/BHcMloN.png"
                     alt="Explore, find exactly what you need"
                     className={styles["explore__card--img"]}
                  />
               </figure>
            </div>
            <h3 className={styles["explore__card--title"]}>Men Fashion</h3>
         </div>
         <div className={styles["explore__card"]}>
            <div className={styles["explore__card--media"]}>
               <figure className={styles["explore__card--image"]}>
                  <img
                     src="https://i.imgur.com/BHcMloN.png"
                     alt="Explore, find exactly what you need"
                     className={styles["explore__card--img"]}
                  />
               </figure>
            </div>
            <h3 className={styles["explore__card--title"]}>Men Fashion</h3>
         </div>
         <div className={styles["explore__card"]}>
            <div className={styles["explore__card--media"]}>
               <figure className={styles["explore__card--image"]}>
                  <img
                     src="https://i.imgur.com/BHcMloN.png"
                     alt="Explore, find exactly what you need"
                     className={styles["explore__card--img"]}
                  />
               </figure>
            </div>
            <h3 className={styles["explore__card--title"]}>Men Fashion</h3>
         </div>
         <div className={styles["explore__card"]}>
            <div className={styles["explore__card--media"]}>
               <figure className={styles["explore__card--image"]}>
                  <img
                     src="https://i.imgur.com/BHcMloN.png"
                     alt="Explore, find exactly what you need"
                     className={styles["explore__card--img"]}
                  />
               </figure>
            </div>
            <h3 className={styles["explore__card--title"]}>Men Fashion</h3>
         </div>
         <div className={styles["explore__card"]}>
            <div className={styles["explore__card--media"]}>
               <figure className={styles["explore__card--image"]}>
                  <img
                     src="https://i.imgur.com/BHcMloN.png"
                     alt="Explore, find exactly what you need"
                     className={styles["explore__card--img"]}
                  />
               </figure>
            </div>
            <h3 className={styles["explore__card--title"]}>Men Fashion</h3>
         </div>
      </div>
   );
};
export default ExploreWrapper;
