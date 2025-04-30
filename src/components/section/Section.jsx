import styles from "@components/section/section.module.scss";
import { getSection } from "@services/api.service";
import { useEffect, useState } from "react";

const Section = () => {
   const [dataHero, setDataHero] = useState([]);
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
   // console.log(dataHero);
   useEffect(() => {
      getAllSection();
   }, []);

   return (
      <section className={styles["section"]}>
         {dataHero.map(({ id, heading, desc, btnTitle, bannerImg }) => (
            <div key={id} className={styles["section-banner"]}>
               <div className={styles["section-ct"]}>
                  <h1 className={styles["section-ct__heading"]}>{heading}</h1>
                  <p className={styles["section-ct__desc"]}>{desc}</p>
                  <button className={styles["section-ct__more"]}>
                     {btnTitle}
                  </button>
               </div>
               <div className="section-media">
                  <figure className={styles["media__image"]}>
                     <div className={styles["media__wrapper"]}>
                        <img
                           src={bannerImg}
                           alt="Shoe"
                           className={styles["media__img"]}
                        />
                     </div>
                  </figure>
               </div>
            </div>
         ))}
      </section>
   );
};
export default Section;
