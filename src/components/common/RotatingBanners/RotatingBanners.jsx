import { useState, useCallback, useEffect } from "react";
import a10 from "@assets/images/10.png";
import a11 from "@assets/images/11.png";
import a12 from "@assets/images/12.png";
import classNames from "classnames/bind";
import styles from "@components/common/RotatingBanners/RotatingBanners.module.scss";
const cx = classNames.bind(styles);
const RotatingBanners = () => {
   const [positions, setPositions] = useState([0, 1, 2]);
   const [isAnimating, setIsAnimating] = useState(false);

   const [isPaused, setIsPaused] = useState(false);
   const banners = [
      {
         id: 0,
         className: "orange-banner",
         img: a10,
         heading: "Beautiful ad templates",
         desc: "Start with a pre-designed template to create a Facebook ad that's visually appealing and engaging. Select a professionally designed Facebook ad template or create your video ad, then simply customize the content to fit your brand.",
      },
      {
         id: 1,
         className: "green-banner",
         img: a11,
         heading: "Engaging Video Ads",
         desc: "Create stunning video ads with our easy-to-use templates. Customize visuals and messaging to capture your audience's attention and boost your brand.",
      },
      {
         id: 2,
         className: "pink-banner",
         img: a12,
         heading: "Dynamic Social Media Ads",
         desc: "Craft eye-catching social media ads with our customizable templates. Tailor designs to your brand and drive engagement across platforms.",
      },
   ];
   const handleBannerClick = useCallback(() => {
      if (isAnimating) return;
      setIsAnimating(true);
      setTimeout(() => {
         setPositions(([first, ...rest]) => [...rest, first]);
         setIsAnimating(false);
      }, 500);
   }, [isAnimating]);
   useEffect(() => {
      if (isPaused) return;
      const timer = setInterval(() => handleBannerClick(), 4000);
      return () => clearInterval(timer);
   }, [handleBannerClick, isPaused]);
   const getPositionClass = (index) => {
      const positionMap = {
         [positions[0]]: "top-position",
         [positions[1]]: "middle-position",
         [positions[2]]: "bottom-position",
      };
      return positionMap[index] || "";
   };

   const renderBanner = (banner, index) => (
      <div
         className={cx("banner", banner.className, getPositionClass(index), {
            animating: isAnimating,
         })}
         onClick={handleBannerClick}
         key={banner.id}
      >
         <div className={cx(`${banner.className}-content`)}>
            <img
               src={banner.img}
               alt={banner.heading}
               className={cx("banner-img")}
            />
         </div>
      </div>
   );
   const middleBanner = banners[positions[1]];
   return (
      <div className={cx("templates")}>
         <div className={cx("templates-wrapper")}>
            <div className={cx("templates-wrapper-media")}>
               <div className={cx("rotating-banners-header")}>
                  Create a banner
               </div>
               <div
                  className={cx("rotating-banners-container")}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
               >
                  <div>
                     {banners.map((banner, index) =>
                        renderBanner(banner, index)
                     )}
                  </div>
               </div>
            </div>

            <div className={cx("templates-content")}>
               <h2 className={cx("templates-content__heading")}>
                  {middleBanner.heading}
               </h2>
               <p className={cx("templates-content__desc")}>
                  {middleBanner.desc}
               </p>
               <button className={cx("templates-content__more")}>
                  Make an Ad
               </button>
            </div>
         </div>
      </div>
   );
};

export default RotatingBanners;
