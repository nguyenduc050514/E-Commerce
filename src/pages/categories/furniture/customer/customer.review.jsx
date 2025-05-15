import classNames from "classnames/bind";
import styles from "@pages/categories/furniture/customer/customer.review.module.scss";
import { useEffect, useState } from "react";
import { getCustomerComment } from "@services/api.service";
import start from "@assets/icons/start.svg";
const cx = classNames.bind(styles);

const CustomerReviews = () => {
   const [customerCmt, setCustomerCmt] = useState([]);
   const [currentSlide, setCurrentSlide] = useState(0);
   const fetchCustomerCmt = async () => {
      try {
         const response = await getCustomerComment();
         if (response.data) {
            setCustomerCmt(response.data);
         }
      } catch (error) {
         console.log(error.message);
      }
   };
   useEffect(() => {
      fetchCustomerCmt();
   }, []);
   console.log(currentSlide);
   return (
      <div className={cx("reviews")}>
         <div className={cx("reviews-container")}>
            <div className={cx("reviews-header")}>
               <h1 className={cx("reviews__heading")}>
                  What our customers are say us
               </h1>
               <div className={cx("reviews__action")}>
                  <button
                     className={cx("reviews__action-btn")}
                     onClick={() => {
                        {
                           /* 
                              // Cách 1: Viết rõ ràng hơn
                                 setCurrentSlide((currentSlide) => 
                                 currentSlide >= customerCmt.length - 1 ? 0 : currentSlide + 1
                                 );

                                 // Cách 2: Dùng modulo (%) để tự động quay vòng
                                 setCurrentSlide((currentSlide) => (currentSlide + 1) % customerCmt.length);
                           */
                        }
                        setCurrentSlide(
                           (prev) =>
                              (prev - 1 + customerCmt.length) %
                              customerCmt.length
                        );
                     }}
                  >
                     left
                  </button>
                  <button
                     className={cx("reviews__action-btn")}
                     onClick={() => {
                        {
                           /* 
                              // Cách 1: Viết rõ ràng hơn
                                 setCurrentSlide((currentSlide) => 
                                 currentSlide >= customerCmt.length - 1 ? 0 : currentSlide + 1
                                 );

                                 // Cách 2: Dùng modulo (%) để tự động quay vòng
                                 setCurrentSlide((currentSlide) => (currentSlide + 1) % customerCmt.length);
                           */
                        }
                        setCurrentSlide(
                           (currentSlide) =>
                              (currentSlide + 1) % customerCmt.length
                        );
                     }}
                  >
                     right
                  </button>
               </div>
            </div>
            <div className={cx("reviews-content")}>
               <div className={cx("reviews-list")}>
                  <div
                     className={cx("reviews-track")}
                     style={{
                        transform: `translate(-${currentSlide * 53}%)`,
                        transition: "transform 0.5s ease",
                     }}
                  >
                     {customerCmt.map(({ id, user, desc, rating }) => (
                        <div key={id} className={cx("reviews-item")}>
                           <p className={cx("reviews-cmt")}>{desc}</p>
                           <div className={cx("reviews-user")}>
                              <img
                                 src={user?.avatar}
                                 alt=""
                                 className={cx("reviews-avatar")}
                              />
                              <div className={cx("reviews-info")}>
                                 <h3 className={cx("reviews-name")}>
                                    {user?.name}
                                 </h3>
                                 <p className={cx("reviews-title")}>
                                    {" "}
                                    {user?.title}
                                 </p>
                              </div>
                           </div>
                           <div className={cx("reviews-rating")}>
                              {Array.from({ length: rating }, (_, i) => (
                                 <img key={i} src={start} alt="start" />
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default CustomerReviews;
