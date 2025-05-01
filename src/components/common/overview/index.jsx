import styles from "@components/common/overview/overview.module.scss";
import close from "@assets/icons/close.svg";
const OverView = () => {
   return (
      <div className={styles.overview}>
         <p className={styles.overview__like}>Added to Wish List</p>
         <div className={styles.overview__wish}>
            <a href="#!" className={styles.overview__view}>
               View
            </a>
            <img src={close} alt="" />
         </div>
      </div>
   );
};
export default OverView;
