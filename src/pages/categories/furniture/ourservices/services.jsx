import classNames from "classnames/bind";
import styles from "@pages/categories/furniture/ourservices/ourServices.module.scss";
import shipping from "@assets/icons/shipping.svg";
import support from "@assets/icons/support.svg";
import money from "@assets/icons/money.svg";
import cart from "@assets/icons/cart.svg";
import { useMemo, useRef } from "react";
import "@components/modal/modal.css";
import PopzyModal from "@components/modal/modal";

const cx = classNames.bind(styles);

const ServicesOur = () => {
   const videoModalRef = useRef(null);

   const servicesItems = useMemo(
      () => [
         {
            icon: shipping,
            title: "Free Shipping",
            desc: "Free Shipping On All Order",
         },
         {
            icon: support,
            title: "Support 24/7",
            desc: "Support 24 hours a day",
         },
         {
            icon: money,
            title: "Money return",
            desc: "Back guaramtee under 5 days",
         },
         {
            icon: cart,
            title: "Order Discounts",
            desc: "Onevery order over $150",
         },
      ],
      []
   );
   const openVideoModal = () => {
      if (videoModalRef.current) {
         videoModalRef.current.open();
      }
   };
   return (
      <div className={cx("services")}>
         <div className={cx("services-container")}>
            <div className={cx("services-content")}>
               <h1 className={cx("content-heading")}>Our Services</h1>
               <ul className={cx("content-list")}>
                  {servicesItems.map(({ icon, title, desc }) => (
                     <li key={icon} className={cx("content-item")}>
                        <img
                           src={icon}
                           alt="shipping"
                           className={cx("item-icon")}
                        />
                        <div>
                           <h3 className={cx("item-heading")}>{title}</h3>
                           <p className={cx("item-desc")}>{desc}</p>
                        </div>
                     </li>
                  ))}
               </ul>
               <div className={cx("content-action")}>
                  <button className={cx("action-btn")}></button>
                  <button className={cx("action-btn")}></button>
               </div>
            </div>
            <figure
               className={cx("services-media")}
               onClick={openVideoModal}
               style={{ cursor: "pointer" }}
            >
               <img
                  src="https://i.imgur.com/lHuMegR.jpeg"
                  alt="Click to play video"
                  className={cx("services-media__img")}
               />
               <div className={cx("video-play-overlay")}>
                  <div className={cx("play-icon")}></div>
               </div>
            </figure>
         </div>
         <PopzyModal
            ref={videoModalRef}
            cssClass={["video-modal"]}
            enableScrollLock={true}
            closeMethods={["overlay", "escape"]}
         >
            <div className={cx("video-container")}>
               {/* <iframe
                  className={cx("video-container__if")}
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/R5zuwtPBek4?si=-cbB_IM1491NKd77"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
               ></iframe> */}
            </div>
         </PopzyModal>
      </div>
   );
};

export default ServicesOur;
