import styles from "@components/header/navbar/navbar.module.scss";
const Navbar = () => {
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
      <div className="navig-navbar">
         <ul className={styles["navig-navbar__list"]}>
            {navbarListItems.map(({ title, href }) => (
               <li key={title} className={styles["navig-navbar__items"]}>
                  <a href={href} className={styles["navig-navbar__link"]}>
                     {title}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
};
export default Navbar;
