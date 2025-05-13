import classNames from "classnames/bind";
import styles from "@pages/categories/furniture/header/header.module.scss";
const cx = classNames.bind(styles);
import furniture from "@assets/images/1.png";
import Button from "@components/common/button/button";
const Header = () => {
   return (
      <div className={cx("header")}>
         <div className={cx("header-container")}>
            <div className={cx("header-wrapper")}>
               <div className={cx("header-left")}>
                  <h1 className={cx("header-heading")}>
                     Find Your Best Furniture
                  </h1>
                  <p className={cx("header-desc")}>
                     The most wanted styles is waiting for you. Find the best
                     styles of modern furniture for you. Still, the second
                     option holds promised. could make the tagline.
                  </p>
                  <Button
                     children="Get Started"
                     minWidth="181px"
                     borderRadius="8px"
                     marginTop="30px"
                  />
               </div>
               <div className={cx("header-right")}>
                  <figure className={cx("header-image")}>
                     <img src={furniture} alt="" className={cx("header-img")} />
                  </figure>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Header;
