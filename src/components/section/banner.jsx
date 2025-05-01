import styles from "@components/section/banner.module.scss";
const Banner = (props) => {
   const { dataHero, currentSlide } = props;
   return (
      <div className={styles["section-banner"]}>
         <div className={styles["section-ct"]}>
            <h1 className={styles["section-ct__heading"]}>
               {dataHero[currentSlide].heading}
            </h1>
            <p className={styles["section-ct__desc"]}>
               {dataHero[currentSlide].desc}
            </p>
            <button className={styles["section-ct__more"]}>
               {dataHero[currentSlide].btnTitle}
            </button>
         </div>
         <div className={styles["section-media"]}>
            <figure className={styles.media__image}>
               <div className={styles.media__wrapper}>
                  <img
                     src={dataHero[currentSlide].bannerImg}
                     alt="Slider Image"
                     className={styles.media__img}
                  />
               </div>
            </figure>
         </div>
      </div>
   );
};
export default Banner;
