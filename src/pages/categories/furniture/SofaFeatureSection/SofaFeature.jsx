import classNames from "classnames/bind";
import styles from "@pages/categories/furniture/SofaFeatureSection/SofaFeature.module.scss";
import { useCallback, useEffect, useState } from "react";
import { getAllThumbnail } from "@services/api.service";

const cx = classNames.bind(styles);

const SofaFeature = () => {
   const [thumbnails, setThumbnails] = useState([]);
   const [thumbnailLarge, setThumbnailLarge] = useState(null);

   const fetchThumbnails = useCallback(async () => {
      try {
         const response = await getAllThumbnail();
         if (Array.isArray(response?.data)) {
            setThumbnails(response.data);
         }
      } catch (error) {
         console.error("Failed to fetch thumbnails:", error.message);
      }
   }, []);

   useEffect(() => {
      fetchThumbnails();
   }, [fetchThumbnails]);

   useEffect(() => {
      if (thumbnails.length > 0 && !thumbnailLarge) {
         setThumbnailLarge(thumbnails[0]);
      }
   }, [thumbnails, thumbnailLarge]);

   const handleChangeThumbnail = useCallback(
      (id) => {
         const img = thumbnails.find((i) => i.id === id);
         if (img) {
            setThumbnailLarge(img);
         }
      },
      [thumbnails]
   );

   if (!thumbnails.length) {
      return <div className={cx("sofaFeature-loading")}>Loading...</div>;
   }
   const sofaFeatureItems = [
      {
         id: 1,
         content: "Interior Stretegy",
      },
      {
         id: 2,
         content: "Creative Designer",
      },
      {
         id: 3,
         content: "Interior Architecture",
      },
      {
         id: 4,
         content: "Update Designs",
      },
      {
         id: 5,
         content: "Event Decoration",
      },
      {
         id: 6,
         content: "21 Years Experience",
      },
   ];

   return (
      <div className={cx("sofaFeature")}>
         <div className={cx("sofaFeature-container")}>
            <div className={cx("sofaFeature-wrapper")}>
               <figure className={cx("sofaFeature-thumbnail")}>
                  <div className={cx("sofaFeature-thumbnail__small")}>
                     {thumbnails.map(({ id, img_small }) => (
                        <img
                           key={id}
                           src={img_small}
                           alt={`Thumbnail ${id}`}
                           className={cx("sofaFeature-thumbnail__small-img", {
                              active: thumbnailLarge?.id === id,
                           })}
                           onClick={() => handleChangeThumbnail(id)}
                        />
                     ))}
                  </div>
                  {thumbnailLarge && (
                     <img
                        src={thumbnailLarge.img}
                        alt="Large thumbnail"
                        className={cx("sofaFeature-thumbnail__large")}
                     />
                  )}
               </figure>
               <div className={cx("sofaFeature-content")}>
                  <h1 className={cx("sofaFeature-heading")}>
                     Comfortable Sofa
                  </h1>
                  <p className={cx("sofaFeature-desc")}>
                     The most wanted styles are waiting for you. Find the best
                     styles of modern furniture for you.
                  </p>
                  <ul className={cx("sofaFeature-list")}>
                     {sofaFeatureItems.map(({ id, content }) => (
                        <li key={id} className={cx("sofaFeature-item")}>
                           {content}
                        </li>
                     ))}
                  </ul>
                  <button className={cx("sofaFeature-action")}>
                     Learn More
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SofaFeature;
