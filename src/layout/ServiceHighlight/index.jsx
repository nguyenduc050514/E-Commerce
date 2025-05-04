import classNames from "classnames/bind";
import styles from "@layout/ServiceHighlight/service.module.scss";
import sameDay from "@assets/icons/same-day.svg";
import nextDay from "@assets/icons/next-day.svg";
import multiple from "@assets/icons/multiple.svg";
import trusted from "@assets/icons/trusted.svg";
const cx = classNames.bind(styles);
const ServiceHighlight = () => {
   const serviceItems = [
      {
         url_img: sameDay,
         heading: "Same Day Delivery",
         desc: "We are providing same day delivery with a minimum cost at anytime anywhere.",
      },
      {
         url_img: nextDay,
         heading: "Next Day Delivery",
         desc: "We are providing next day delivery without any minimum cost at anytime anywhere.",
      },
      {
         url_img: multiple,
         heading: "Multiple Store",
         desc: "We have multiple store across the country and soon we will launch more stores.",
      },
      {
         url_img: trusted,
         heading: "Trusted Platform",
         desc: "Our clients loves us so much. We are providing the best and bringing the best to the clients.",
      },
   ];

   return (
      <div className={cx("service")}>
         <div className={cx("container")}>
            <div className={cx("service-list")}>
               {serviceItems.map(({ url_img, heading, desc }) => (
                  <div key={heading} className={cx("service-item")}>
                     <img src={url_img} alt={heading} />
                     <h4 className={cx("service-heading")}>{heading}</h4>
                     <p className={cx("service-desc")}>{desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
export default ServiceHighlight;
