import classNames from "classnames/bind";
import styles from "@layout/header/navbar/navbar.module.scss";
import menu from "@assets/icons/menu.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router";
const cx = classNames.bind(styles);
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
         href: "/",
      },
      {
         title: "Category",
         href: "/category",
      },
      {
         title: "Brand",
         href: "/brand",
      },
      {
         title: "Products",
         href: "/products",
      },
      {
         title: "About",
         href: "/about",
      },
      {
         title: "Shop",
         href: "/shop",
      },
      {
         title: "Pages",
         href: "pages",
      },
   ];
   return (
      <nav className={cx("navig")}>
         {isMobile && (
            <div className={cx("navig-navbar__menu")}>
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
               <li key={title} className={cx("navig-navbar__items")}>
                  <Link to={href} className={cx("navig-navbar__link")}>
                     {title}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};
export default Navbar;
