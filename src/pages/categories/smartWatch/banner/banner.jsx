import classNames from "classnames/bind";
import styles from "@pages/categories/smartWatch/banner/banner.module.scss";
const cx = classNames.bind(styles);
import banner from "@assets/images/banner-smartwatch.svg";
import shipping from "@assets/icons/shipping.svg";
import support from "@assets/icons/support.svg";
import money from "@assets/icons/money.svg";
import cart from "@assets/icons/cart.svg";
const Banner = () => {
   const serviceItems = [
      {
         heading: "Free Shipping",
         desc: "Free Shipping On All Order",
         faIcon: shipping,
      },
      {
         heading: "Support 24/7",
         desc: "Support 24 hours a day",
         faIcon: support,
      },
      {
         heading: "Money return",
         desc: "Back guaramtee under 5 days",
         faIcon: money,
      },
      {
         heading: "Order Discounts",
         desc: "Onevery order over $150",
         faIcon: cart,
      },
   ];

   return (
      <div className={cx("section")}>
         <div className={cx("section-banner")}>
            <div className={cx("section-ct")}>
               <h1 className={cx("section-ct__heading")}>
                  Choose Your Latest Electronics Products
               </h1>
               <p className={cx("section-ct__desc")}>
                  The most wanted styles is waiting for you. Find the best
                  styles of modern shoes for you. Still, the second option holds
                  promised. could make the tagline.
               </p>
               <button className={cx("section-ct__more")}>
                  Explore Product
               </button>
            </div>
            <div className={cx("section-media")}>
               <figure className={cx("media__image")}>
                  <div className={cx("media__wrapper")}>
                     <img
                        src={banner}
                        alt="Slider Image"
                        className={cx("media__img")}
                     />
                  </div>
               </figure>
            </div>
         </div>
         <div className={cx("service-bar")}>
            {serviceItems.map(({ heading, desc, faIcon }) => (
               <div className={cx("service-item")} key={faIcon}>
                  <img src={faIcon} alt="Free Shipping" />
                  <div>
                     <h3 className={cx("service-item__heading")}>{heading}</h3>
                     <p className={cx("service-desc")}>{desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};
export default Banner;
