import classNames from "classnames/bind";
import styles from "@layout/header/action/action.module.scss";
import user from "@assets/icons/user.svg";
import heart from "@assets/icons/heart.svg";
import shop from "@assets/icons/Shop.svg";
import { useMemo } from "react";
const cx = classNames.bind(styles);
const Action = ({ wishlist, cartsProducts }) => {
   const countWithList = Object.values(wishlist).filter(Boolean).length;
   const countCart = cartsProducts.length;
   const itemIcons = useMemo(
      () => [
         { src: user },
         { src: heart, countCart: countWithList },
         { src: shop, countCart: countCart },
      ],
      [countWithList, countCart]
   );
   return (
      <div className={cx("action")}>
         {itemIcons.map(({ src, countCart }) => (
            <button key={src} className={cx("action-love")}>
               <img src={src} alt="user" className={cx('"action-icon"')} />
               <span>{countCart}</span>
            </button>
         ))}
      </div>
   );
};
export default Action;
