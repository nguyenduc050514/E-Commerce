/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "@components/section/section.module.scss";
import { getSection } from "@services/api.service";
import { useEffect, useState } from "react";
import Slider from "./sliderControls";
import Banner from "./banner";
const cx = classNames.bind(styles);
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
   // useEffect(() => {
   //    const timer = setInterval(() => {
   //       nextSlide();
   //    }, 4000);
   //    return () => clearInterval(timer);
   // }, [dataHero]);
   return (
      <section className={cx("section")}>
         {dataHero.length > 0 && (
            <div className={cx("slider-container")}>
               <Banner dataHero={dataHero} currentSlide={currentSlide} />
               <Slider
                  dataHero={dataHero}
                  prevSlide={prevSlide}
                  nextSlide={nextSlide}
                  currentSlide={currentSlide}
                  goToSlide={goToSlide}
               />
            </div>
         )}
      </section>
   );
};

export default Section;
