import classNames from "classnames/bind";
import styles from "@pages/categories/MWASection/Showcase/showCase.module.scss";
import showCaseImg1 from "@assets/images/show-case-1.svg";
import showCaseImg2 from "@assets/images/show-case-2.svg";
import showCaseImg3 from "@assets/images/show-case-3.svg";
import fast from "@assets/icons/fast.svg";
import money from "@assets/icons/money.svg";
import payment from "@assets/icons/payment.svg";
const cx = classNames.bind(styles);
const ShowCase = () => {
   const showCaseItems = [
      {
         title: "STREETSTYLE",
         styleBg: "#FFD44D",
         srcImg: showCaseImg1,
      },
      {
         title: "FORMAL BOY",
         styleBg: "#EDD08F",
         srcImg: showCaseImg2,
      },
      {
         title: "CASUAL BOY",
         styleBg: "#F86624",
         srcImg: showCaseImg3,
      },
   ];

   const siteFeaturesItems = [
      {
         icon: fast,
         title: "Super Fast and Free Delivery",
      },
      {
         icon: money,
         title: "Money back Guaranteed",
      },
      {
         icon: payment,
         title: "Super Secure Payment System",
      },
   ];

   return (
      <div className={cx("show-case")}>
         <div className={cx("show-case--container")}>
            <div className={cx("show-case--wrapper")}>
               {showCaseItems.map(({ title, srcImg }, index) => (
                  <figure
                     key={title}
                     className={cx("show-case-image", { large: index === 0 })}
                  >
                     <img
                        src={srcImg}
                        alt={title}
                        className={cx("show-case-img")}
                     />
                     <span className={cx("show-case-label")}>{title}</span>
                     <div className={cx("show-case-label--bg")}></div>
                  </figure>
               ))}
            </div>

            <div className={cx("site-features")}>
               {siteFeaturesItems.map(({ icon, title }) => (
                  <div key={title} className={cx("site-features__item")}>
                     <div className={cx("site-features__circle")}>
                        <img
                           src={icon}
                           alt="Super Fast and Free Delivery"
                           className={cx("site-features__icon")}
                        />
                     </div>
                     <p className={cx("site-features__title")}>{title}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
export default ShowCase;
