import classNames from "classnames/bind";
import styles from "@pages/categories/MWASection/banner/banner.module.scss";
import mwaBanner from "@assets/images/mwa-banner.png";
import mwaStyle from "@assets/images/mwa-style.png";
import accessery from "@assets/icons/accessery.svg";
const cx = classNames.bind(styles);
const Banner = () => {
   return (
      <div className={cx("mwa")}>
         <div className={cx("mwa-wrapper")}>
            <div className={cx("mwa-wrapper-banner")}>
               <img
                  src={mwaBanner}
                  alt="Wear the best"
                  className={cx("mwa-wrapper-banner--img")}
               />
            </div>
            <div className={cx("mwa-wrapper-image")}>
               <img
                  src={mwaStyle}
                  alt="Wear the best"
                  className={cx("mwa-wrapper--style")}
               />
            </div>
            <div className={cx("mwa-container")}>
               <h1 className={cx("mwa-wrapper--heading")}>
                  <span className={cx("mwa-first-line")}>Wear the</span>
                  <span className={cx("mwa-second-line")}>
                     <span className={cx("mwa-circle")}>
                        best
                        <img
                           src={accessery}
                           alt=""
                           className={cx("mwa-circle--accessery")}
                        />
                     </span>
                  </span>
               </h1>
               <p className={cx("mwa-wrapper--desc")}>
                  The most wanted styles is waiting for you. Find the best
                  styles of modern shoes for you. Still, the second option holds
                  promised. could make the tagline.
               </p>
            </div>
         </div>
      </div>
   );
};
export default Banner;
