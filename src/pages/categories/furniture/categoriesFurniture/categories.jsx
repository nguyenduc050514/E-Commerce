import classNames from "classnames/bind";
import styles from "@pages/categories/furniture/categoriesFurniture/categories.module.scss";
import useSofaCategories from "./handleProductsData";
import { useEffect, useRef, useState } from "react";
const cx = classNames.bind(styles);
const Category = () => {
   const { categoriesSofa } = useSofaCategories();
   const [activeTab, setActiveTab] = useState("All category");
   const [sliderStyle, setSliderStyle] = useState({});
   const [categoriesList, setCategoriesList] = useState([]);
   const tabRefs = useRef({});
   const tabs = ["All category", "Sofa", "Chair"];
   useEffect(() => {
      setCategoriesList(categoriesSofa);
   }, [categoriesSofa]);
   useEffect(() => {
      if (tabRefs.current[activeTab]) {
         const element = tabRefs.current[activeTab];
         setSliderStyle({
            left: `${element.offsetLeft}px`,
            width: `${element.offsetWidth}px`,
         });
      }
   }, [activeTab]);
   const handleTabClick = (tab) => {
      setActiveTab(tab);
      if (tab === "All category") {
         setCategoriesList(categoriesSofa);
      } else {
         const filtered = categoriesSofa.filter((c) => c.category_id === tab);
         setCategoriesList(filtered);
      }
   };
   return (
      <div className={cx("category")}>
         <div className={cx("category-container")}>
            <div className={cx("category-wrapper")}>
               <ul className={cx("category-list")}>
                  {tabs.map((tab) => (
                     <li
                        key={tab}
                        ref={(el) => (tabRefs.current[tab] = el)}
                        className={cx("category-item", {
                           active: activeTab === tab,
                        })}
                        onClick={() => handleTabClick(tab)}
                     >
                        {tab}
                     </li>
                  ))}
                  <div
                     className={cx("category-slider")}
                     style={sliderStyle}
                  ></div>
               </ul>
               <div className={cx("category-products")}>
                  {categoriesList.length > 0 &&
                     categoriesList.map(({ id, title, image }) => (
                        <div key={id} className={cx("category-products-item")}>
                           <figure
                              className={cx("category-products-item__image")}
                           >
                              <img
                                 src={image}
                                 alt=""
                                 className={cx("category-products-item__img")}
                              />
                           </figure>
                           <div className={cx("category-products-item__info")}>
                              <h3
                                 className={cx("category-products-item__title")}
                              >
                                 {title}
                              </h3>
                           </div>
                        </div>
                     ))}
               </div>
            </div>
         </div>
      </div>
   );
};
export default Category;
