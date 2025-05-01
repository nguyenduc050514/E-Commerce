import styles from "@components/explore/explore.module.scss";
import ExploreWrapper from "./explore.wrapper";
const Explore = () => {
   return (
      <div className={styles["explore"]}>
         <div className={styles["explore__container"]}>
            <h1 className={styles["explore__heading"]}>
               Explore, find exactly what you need
            </h1>
            <ExploreWrapper />
         </div>
      </div>
   );
};
export default Explore;
