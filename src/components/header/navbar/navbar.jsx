import styles from "@components/header/navbar/navbar.module.scss";
import menu from "@assets/icons/menu.svg";
import { useEffect, useState } from "react";
const Navbar = () => {
   const [isMobile, setIsMobile] = useState(false);
   const [isToggleMenu, setIsToggleMenu] = useState(false);
   useEffect(() => {
      const checkIfMobile = () => {
         setIsMobile(window.innerWidth <= 768);
      };
      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
      return () => window.removeEventListener("resize", checkIfMobile);
   }, []);

   const navbarListItems = [
      {
         title: "Home",
         href: "#!",
      },
      {
         title: "Category",
         href: "#!",
      },
      {
         title: "Brand",
         href: "#!",
      },
      {
         title: "Products",
         href: "#!",
      },
      {
         title: "About",
         href: "#!",
      },
      {
         title: "Shop",
         href: "#!",
      },
      {
         title: "Pages",
         href: "#!",
      },
   ];
   return (
      <nav className={styles.navig}>
         {isMobile && (
            <div className={styles["navig-navbar__menu"]}>
               <button
                  onClick={() => setIsToggleMenu(!isToggleMenu)}
                  className={`
                     ${styles["navig-navbar__menu-btn"]}`}
               >
                  <img src={menu} alt="menu" />
                  <span>Menu</span>
               </button>
            </div>
         )}
         <ul
            className={`${styles["navig-navbar__list"]} ${
               isToggleMenu ? styles["active"] : ""
            }`}
         >
            {navbarListItems.map(({ title, href }) => (
               <li key={title} className={styles["navig-navbar__items"]}>
                  <a href={href} className={styles["navig-navbar__link"]}>
                     {title}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
};
export default Navbar;
