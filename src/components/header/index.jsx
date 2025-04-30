import styles from "@components/header/header.module.scss";
const Header = () => {
   return (
      <header className={styles["header"]}>
         <div className="header__container">
            {/* logo */}
            <div>
               <p>Pursuit</p>
            </div>
            <div>
               {/* search */}
               <div>
                  <input type="text" name="" id="" />
                  <button>Search</button>
               </div>
               {/* navbar */}
               <div>
                  <ul>
                     <li>
                        <a href="#!">Home</a>
                     </li>
                     <li>
                        <a href="#!">Category</a>
                     </li>
                     <li>
                        <a href="#!">Brand</a>
                     </li>
                     <li>
                        <a href="#!">Products</a>
                     </li>
                     <li>
                        <a href="#!">About</a>
                     </li>
                     <li>
                        <a href="#!">Shop</a>
                     </li>
                     <li>
                        <a href="#!">Pages</a>
                     </li>
                  </ul>
               </div>
            </div>
            {/* action */}
            <div>
               {/* icon */}
               <span>user</span>
               <span>heart</span>
               <span>shop</span>
            </div>
         </div>
      </header>
   );
};
export default Header;
