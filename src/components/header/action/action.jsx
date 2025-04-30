import styles from "@components/header/action/action.module.scss";
import user from "@assets/icons/user.svg";
import heart from "@assets/icons/heart.svg";
import shop from "@assets/icons/Shop.svg";
const Action = () => {
   const itemIcons = [
      {
         src: user,
      },
      {
         src: heart,
         countCart: 0,
      },
      {
         src: shop,
         countCart: 0,
      },
   ];

   return (
      <div className={styles["action"]}>
         {itemIcons.map(({ src, countCart }) => (
            <button key={src}>
               <img src={src} alt="user" className={styles["action-icon"]} />
               <span>{countCart}</span>
            </button>
         ))}
      </div>
   );
};
export default Action;
