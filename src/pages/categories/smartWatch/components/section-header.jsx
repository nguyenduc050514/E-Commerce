import classNames from "classnames/bind";
import styles from "@pages/categories/smartWatch/components/sectionHeader.module.scss";
const cx = classNames.bind(styles);
const SelectionHeader = ({ heading, action }) => {
   return (
      <div className={cx("section-header")}>
         <div className={cx("section-header__heading")}>{heading}</div>
         {action && (
            <div className={cx("section-action")}>
               <button>left</button>
               <button>right</button>
            </div>
         )}
      </div>
   );
};
export default SelectionHeader;
