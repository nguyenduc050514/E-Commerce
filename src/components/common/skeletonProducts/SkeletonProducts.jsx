import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "@components/common/skeletonProducts/productSkeleton.module.scss";

const cx = classNames.bind(styles);

const ActorSkeletonLoader = ({ count = 3 }) => {
   const [isLoading, setIsLoading] = useState(true);
   // Simulate loading for demo purposes
   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
   }, []);

   return (
      <div className={cx("actor-loader-container")}>
         {isLoading ? (
            <div className={cx("actor-grid")}>
               {Array(count)
                  .fill(0)
                  .map((_, index) => (
                     <div key={index} className={cx("actor-card-skeleton")}>
                        <div className={cx("image-skeleton")}></div>
                        <div className={cx("content-wrapper")}>
                           <div className={cx("title-skeleton")}></div>
                           <div className={cx("description-skeleton")}>
                              <div className={cx("description-line")}></div>
                              <div className={cx("description-line")}></div>
                           </div>
                           <div className={cx("footer-skeleton")}></div>
                        </div>
                     </div>
                  ))}
            </div>
         ) : (
            <div className={cx("loaded-message")}>
               Data loaded successfully!
            </div>
         )}
      </div>
   );
};
export default ActorSkeletonLoader;
