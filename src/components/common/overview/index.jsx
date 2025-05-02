import classNames from "classnames/bind";
import styles from "@components/common/overview/overview.module.scss";
import close from "@assets/icons/close.svg";
const cx = classNames.bind(styles);
const OverView = () => {
   return (
      <div className={cx("overview")}>
         <p className={cx("overview__like")}>Added to Wish List</p>
         <div className={cx("overview__wish")}>
            <a href="#!" className={cx("overview__view")}>
               View
            </a>
            <img src={close} alt="" />
         </div>
      </div>
   );
};
export default OverView;


/*
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

*/