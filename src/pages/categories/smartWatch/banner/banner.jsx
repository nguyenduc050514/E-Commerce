import classNames from "classnames/bind";
import styles from "@pages/categories/smartWatch/banner/banner.module.scss";
const cx = classNames.bind(styles);
import banner from "@assets/images/banner-smartwatch.svg";
const Banner = () => {
   return (
      <div className={cx("section")}>
         <div className={cx("section-banner")}>
            <div className={cx("section-ct")}>
               <h1 className={cx("section-ct__heading")}>
                  Choose Your Latest Electronics Products
               </h1>
               <p className={cx("section-ct__desc")}>
                  The most wanted styles is waiting for you. Find the best
                  styles of modern shoes for you. Still, the second option holds
                  promised. could make the tagline.
               </p>
               <button className={cx("section-ct__more")}>
                  Explore Product
               </button>
            </div>
            <div className={cx("section-media")}>
               <figure className={cx("media__image")}>
                  <div className={cx("media__wrapper")}>
                     <img
                        src={banner}
                        alt="Slider Image"
                        className={cx("media__img")}
                     />
                  </div>
               </figure>
            </div>
         </div>
      </div>
   );
};
export default Banner;
