import classNames from "classnames/bind";
import styles from "@layout/header/action/action.module.scss";
import user from "@assets/icons/user.svg";
import heart from "@assets/icons/heart.svg";
import shop from "@assets/icons/Shop.svg";
import { useMemo, useState } from "react";
import MiniCart from "../MiniCart";
const cx = classNames.bind(styles);
const Action = ({ wishlist, cartsProducts }) => {
   const countWithList = Object.values(wishlist).filter(Boolean).length;
   const countCart = cartsProducts.length;
   const [isHovered, setIsHovered] = useState(false);
   const handleMouseOver = () => {
      setIsHovered(true);
   };
   const handleMouseLeave = () => {
      setIsHovered(false);
   };
   const itemIcons = useMemo(
      () => [
         {
            id: 1,
            src: user,
         },
         {
            id: 2,

            src: heart,
            countCart: countWithList,
         },
         {
            id: 3,
            src: shop,
            countCart: countCart,
            onMouseOver: handleMouseOver,
            onMouseLeave: handleMouseLeave,
         },
      ],
      [countWithList, countCart]
   );
   return (
      <div className={cx("action")}>
         {itemIcons.map(
            ({
               id,
               src,
               countCart,
               onMouseOver = null,
               onMouseLeave = null,
            }) => (
               <div
                  key={id}
                  className={cx("action-item")}
                  onMouseOver={onMouseOver}
                  onMouseLeave={onMouseLeave}
               >
                  <button className={cx("action-love")}>
                     <img
                        src={src}
                        alt="user"
                        className={cx('"action-icon"')}
                     />
                     <span>{countCart}</span>
                  </button>
                  {id === 3 && isHovered && (
                     <MiniCart cartsProducts={cartsProducts} />
                  )}
               </div>
            )
         )}
      </div>
   );
};
export default Action;
