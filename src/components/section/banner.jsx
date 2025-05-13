import classNames from "classnames/bind";
import styles from "@components/section/banner.module.scss";
import Button from "@components/common/button/button";
const cx = classNames.bind(styles);
const Banner = (props) => {
   const { dataHero, currentSlide } = props;
   return (
      <div className={cx("section-banner")}>
         <div className={cx("section-ct")}>
            <h1 className={cx("section-ct__heading")}>
               {dataHero[currentSlide].heading}
            </h1>
            <p className={cx("section-ct__desc")}>
               {dataHero[currentSlide].desc}
            </p>
            <Button marginTop="35px" />
         </div>
         <div className={cx("section-media")}>
            <figure className={cx("media__image")}>
               <div className={cx("media__wrapper")}>
                  <img
                     src={dataHero[currentSlide].bannerImg}
                     alt="Slider Image"
                     className={cx("media__img")}
                  />
               </div>
            </figure>
         </div>
      </div>
   );
};
export default Banner;
