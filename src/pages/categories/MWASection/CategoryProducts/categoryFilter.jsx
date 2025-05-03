import React, { useCallback, useEffect, useMemo, useState } from "react";
import classNames from "classnames/bind";
import styles from "@pages/categories/MWASection/CategoryProducts/categoryFilter.module.scss";
// import CartsProducts from "@components/common/Card/Cards";
import { getAllProductsPopular } from "@services/api.service";
import CartsProducts from "@components/common/Card/Cards";
const cx = classNames.bind(styles);
const CategoryFilter = () => {
   const [allProductsMWA, setAllProductsMWA] = useState([]);
   const [activeCategory, setActiveCategory] = useState("all");
   const [productsFilter, setProductsFilter] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const getAllMWA = async () => {
      try {
         setIsLoading(true);
         const response = await getAllProductsPopular();
         if (response?.data) {
            const products = response?.data?.all || [];
            setAllProductsMWA(products);
            setProductsFilter(products);
         }
      } catch (error) {
         console.error(`Error loading products: ${error.message}`);
      } finally {
         setIsLoading(false);
      }
   };
   useEffect(() => {
      getAllMWA();
   }, []);
   const categories = useMemo(() => {
      return [
         {
            id: "all",
            category: "All category",
         },
         {
            id: "men",
            category: "Men Product",
         },
         {
            id: "women",
            category: "Women Product",
         },
         {
            id: "accessory",
            category: "Accessories",
         },
      ];
   }, []);
   const handleFilterProducts = useCallback(
      (id) => {
         const products =
            id === "all"
               ? allProductsMWA
               : allProductsMWA.filter((p) => p.category_id === id);
         setActiveCategory(id);
         setProductsFilter(products);
         return products;
      },
      [allProductsMWA]
   );
   return (
      <div className={cx("category-products__filter")}>
         <div className={cx("category-products__container")}>
            <div className={cx("category-products__wrapper")}>
               {categories.map(({ id, category }) => (
                  <button
                     key={id}
                     className={cx("category-products__filter-btn", {
                        "category-products__filter-btn--active":
                           activeCategory === id,
                     })}
                     onClick={() => handleFilterProducts(id)}
                  >
                     {category}
                  </button>
               ))}
            </div>
            <div className={cx("products")}>
               {isLoading ? (
                  <div className={cx("loading")}>Loading products...</div>
               ) : (
                  <CartsProducts productsPopular={productsFilter} />
               )}
            </div>
         </div>
      </div>
   );
};

export default CategoryFilter;
