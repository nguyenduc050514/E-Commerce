import classNames from "classnames/bind";
import styles from "@layout/header/navbar/navbar.module.scss";
import menu from "@assets/icons/menu.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const cx = classNames.bind(styles);

const Navbar = () => {
   const [isMobile, setIsMobile] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   useEffect(() => {
      const handleResize = () => {
         const mobile = window.innerWidth <= 768;
         setIsMobile(mobile);
         if (!mobile) setIsMenuOpen(false);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   const navbarListItems = [
      { title: "Home", href: "/" },
      { title: "Category", href: "/category" },
      { title: "Brand", href: "/brand" },
      { title: "Products", href: "/products" },
      { title: "About", href: "/about" },
      { title: "Shop", href: "/shop" },
      { title: "Pages", href: "/pages" },
   ];

   return (
      <nav className={cx("navig")}>
         <div className={cx("navig-container")}>
            <div className={cx("navig-navbar__menu")}>
               <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={cx("navig-navbar__menu-btn")}
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle menu"
               >
                  <img src={menu} alt="" aria-hidden="true" />
                  <span>{isMenuOpen ? "CLOSE" : "MENU"}</span>
               </button>
            </div>

            <ul
               className={cx("navig-navbar__list", {
                  "navig-navbar__list--active": isMenuOpen,
               })}
            >
               {navbarListItems.map(({ title, href }) => (
                  <li
                     key={title}
                     className={cx("navig-navbar__items")}
                     onClick={() => console.log(123)}
                  >
                     <Link
                        to={href}
                        className={cx("navig-navbar__link")}
                        onClick={() => isMobile && setIsMenuOpen(false)}
                     >
                        {title}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
