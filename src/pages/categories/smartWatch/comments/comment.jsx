import classNames from "classnames/bind";
import styles from "@pages/categories/smartWatch/comments/comment.module.scss";
import { useEffect, useState } from "react";
import { getCommentsAll } from "@services/api.service";

const cx = classNames.bind(styles);

const Comments = () => {
   const [commentsData, setCommentsData] = useState([]);
   const [currentSlide, setCurrentSlide] = useState(0);
   const itemsPerPage = 3;

   const fetchCommentsData = async () => {
      try {
         const response = await getCommentsAll();
         if (response?.data) {
            setCommentsData(response.data);
         }
      } catch (error) {
         console.error(error.message);
      }
   };

   useEffect(() => {
      fetchCommentsData();
   }, []);
   const totalPages = Math.ceil(commentsData.length / itemsPerPage);

   return (
      <div className={cx("comments")}>
         <div className={cx("comments-container")}>
            <h1 className={cx("comments-heading")}>
               Companies that crush customer engagement with us
            </h1>
            <div className={cx("comments-content")}>
               <div className={cx("slider-wrapper")}>
                  <div
                     className={cx("slide-track", { active: "isActive" })}
                     style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: "transform 0.5s ease",
                     }}
                  >
                     {commentsData.map(
                        ({
                           id,
                           heading,
                           desc,
                           avatar,
                           name,
                           user_desc,
                           rating,
                        }) => (
                           <div
                              key={id}
                              className={cx("comments-content__item")}
                           >
                              {/* <div className={cx("comments-content__start")}>{"★".repeat(rating)}</div> */}
                              <div className={cx("comments-content__start")}>
                                 {"⭐".repeat(rating)}
                              </div>
                              <div className={cx("comments-content__heading")}>
                                 {heading}
                              </div>
                              <div className={cx("comments-content__desc")}>
                                 {desc}
                              </div>
                              <div className={cx("comments-content__user")}>
                                 <img
                                    src={avatar}
                                    alt=""
                                    className={cx(
                                       "comments-content__user-avatar"
                                    )}
                                 />
                                 <div>
                                    <h3
                                       className={cx(
                                          "comments-content__user-name"
                                       )}
                                    >
                                       {name}
                                    </h3>
                                    <p
                                       className={cx(
                                          "comments-content__user-desc"
                                       )}
                                    >
                                       {user_desc}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        )
                     )}
                  </div>
               </div>
            </div>
            <div className={cx("dots")}>
               {Array.from({ length: totalPages }).map((_, index) => (
                  <div
                     key={index}
                     className={cx("dot", { active: currentSlide === index })}
                     onClick={() => setCurrentSlide(index)}
                  ></div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Comments;
