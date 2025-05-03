import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "@layout/header/header.module.scss";
import search from "@assets/icons/search.svg";
import Navbar from "./navbar/navbar";
import Action from "./action/action";
import { useWishlist } from "@context/WishlistContext";

const Header = () => {
   const cx = classNames.bind(styles);
   const { wishlist } = useWishlist();
   const [isScrolled, setIsScrolled] = useState(false); 
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            // Trigger after scrolling 50px
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll); // Cleanup
   }, []);

   return (
      <header
         className={cx("header", {
            "header--scrolled": isScrolled,
         })}
      >
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
            <Action wishlist={wishlist} />
         </div>
         <Navbar />
      </header>
   );
};

export default Header;
