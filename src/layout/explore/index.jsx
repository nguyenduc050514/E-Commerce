import classNames from "classnames/bind";
import styles from "@layout/explore/explore.module.scss";
import ExploreWrapper from "./explore.wrapper";
const cx = classNames.bind(styles);
const Explore = () => {
   return (
      <div className={cx("explore")}>
         <div className={cx("explore__container")}>
            <h1 className={cx("explore__heading")}>
               Explore, find exactly what you need
            </h1>
            <ExploreWrapper />
         </div>
      </div>
   );
};
export default Explore;
