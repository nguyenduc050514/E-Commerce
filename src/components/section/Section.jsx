import styles from "@components/section/section.module.scss";
import { getSection } from "@services/api.service";
import { useEffect, useState } from "react";

const Section = () => {
   const [dataHero, setDataHero] = useState([]);
   const [currentSlide, setCurrentSlide] = useState(0);

   const getAllSection = async () => {
      try {
         const response = await getSection();
         if (response.data) {
            setDataHero(response.data);
         }
      } catch (error) {
         console.error("Failed to fetch users", error);
      }
   };

   useEffect(() => {
      getAllSection();
   }, []);

   const nextSlide = () => {
      setCurrentSlide((prev) => (prev === dataHero.length - 1 ? 0 : prev + 1));
   };

   const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? dataHero.length - 1 : prev - 1));
   };

   const goToSlide = (index) => {
      setCurrentSlide(index);
   };

   return (
      <section className={styles["section"]}>
         {dataHero.length > 0 && (
            <div className={styles["slider-container"]}>
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
                     <figure className={styles["media__image"]}>
                        <div className={styles["media__wrapper"]}>
                           <div className={styles["shadow-layer"]}></div>
                           <img
                              src={dataHero[currentSlide].bannerImg}
                              alt="Slider Image"
                              className={styles["media__img"]}
                           />
                        </div>
                     </figure>
                  </div>
               </div>

               <div className={styles["slider-controls"]}>
                  <button
                     className={styles["slider-arrow"]}
                     onClick={prevSlide}
                     aria-label="Previous slide"
                  >
                     &lt;
                  </button>

                  <div className={styles["slider-dots"]}>
                     {dataHero.map((_, index) => (
                        <button
                           key={index}
                           className={`${styles["slider-dot"]} ${
                              index === currentSlide ? styles["active"] : ""
                           }`}
                           onClick={() => goToSlide(index)}
                           aria-label={`Go to slide ${index + 1}`}
                        />
                     ))}
                  </div>

                  <button
                     className={styles["slider-arrow"]}
                     onClick={nextSlide}
                     aria-label="Next slide"
                  >
                     &gt;
                  </button>
               </div>
            </div>
         )}
      </section>
   );
};

export default Section;
