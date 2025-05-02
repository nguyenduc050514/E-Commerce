import classNames from "classnames/bind";
import styles from "@components/section/slider.module.scss";
import {
   faChevronLeft,
   faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);
const Slider = (props) => {
   const { dataHero, prevSlide, nextSlide, currentSlide, goToSlide } = props;
   return (
      <div className={cx("slider-controls")}>
         <button
            className={cx("slider-arrow")}
            onClick={prevSlide}
            aria-label="Previous slide"
         >
            <FontAwesomeIcon icon={faChevronLeft} />
         </button>

         <div className={cx("slider-dots")}>
            {dataHero.map((_, index) => (
               <button
                  key={index}
                  className={`${styles["slider-dot"]} ${
                     index === currentSlide ? styles.active : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
               />
            ))}
         </div>

         <button
            className={cx("slider-arrow")}
            onClick={nextSlide}
            aria-label="Next slide"
         >
            <FontAwesomeIcon icon={faChevronRight} />
         </button>
      </div>
   );
};
export default Slider;
