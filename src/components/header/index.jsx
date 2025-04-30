import styles from "@components/header/header.module.scss";
import search from "@assets/icons/search.svg";
import Navbar from "./navbar/navbar";
import Action from "./action/action";
const Header = () => {
   return (
      <header className={styles["header"]}>
         <div className={styles["header__container"]}>
            {/* logo */}
            <div className={styles["logo"]}>
               <a href="/" className={styles["logo__title"]}>
                  Pursuit
               </a>
            </div>
            {/* search */}
            <div className={styles["navig"]}>
               <div className={styles["navig-search__wrapper"]}>
                  <input
                     type="text"
                     name=""
                     id=""
                     className={styles["navig-search__input"]}
                     placeholder="Search for anything"
                  />
                  <button className={styles["navig-search__button"]}>
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
