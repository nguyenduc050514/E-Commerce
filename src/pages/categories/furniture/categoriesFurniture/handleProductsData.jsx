import { getCategoriesSofa } from "@services/api.service";
import { useEffect, useState } from "react";

const useSofaCategories = () => {
   const [categoriesSofa, setCategoriesSofa] = useState([]);

   const fetchCategorySofa = async () => {
      try {
         const response = await getCategoriesSofa();
         if (Array.isArray(response?.data)) {
            setCategoriesSofa(response.data);
         }
      } catch (error) {
         console.error("Failed to fetch Category sofa:", error.message);
      }
   };

   useEffect(() => {
      fetchCategorySofa();
   }, []);
   return {
      categoriesSofa,
   };
};

export default useSofaCategories;
