import classNames from "classnames/bind";
import styles from "@layout/header/header.module.scss";
import search from "@assets/icons/search.svg";
import Navbar from "./navbar/navbar";
import Action from "./action/action";
const cx = classNames.bind(styles);
const Header = () => {
   return (
      <header className={cx("header")}>
         <div className={cx("header__container")}>
            {/* logo */}
            <div className={cx("logo")}>
               <a href="/" className={cx("logo__title")}>
                  Pursuit
               </a>
            </div>
            {/* search */}
            <div className={cx("navig")}>
               <div className={cx("navig-search__wrapper")}>
                  <input
                     type="text"
                     name=""
                     id=""
                     className={cx("navig-search__input")}
                     placeholder="Search for anything"
                  />
                  <button className={cx("navig-search__button")}>
                     <img src={search} alt="logo" />
                  </button>
               </div>
               {/* navbar */}
            </div>
            <Action />
         </div>
         <Navbar />
      </header>
   );
};
export default Header;
