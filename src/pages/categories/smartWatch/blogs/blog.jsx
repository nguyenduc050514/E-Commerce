import classNames from "classnames/bind";
import styles from "@pages/categories/smartWatch/blogs/blog.module.scss";
import { useEffect, useState } from "react";
import { getBlogsAllList } from "@services/api.service";
const cx = classNames.bind(styles);
const Blogs = () => {
   const [getBlogsAll, setGetBlogAll] = useState([]);
   const [currentSlide, setCurrentSlide] = useState(0);
   const itemsPerPage = 2;
   const fetchBlogs = async () => {
      try {
         const response = await getBlogsAllList();
         if (response?.data) {
            setGetBlogAll(response.data);
         }
      } catch (error) {
         console.error(error.message);
      }
   };
   useEffect(() => {
      fetchBlogs();
   }, []);
   const totalPages = Math.ceil(getBlogsAll.length / itemsPerPage);
   return (
      <div className={cx("blogs")}>
         <div className={cx("blogs-container")}>
            <div className={cx("blogs-header")}>
               <div className={cx("blogs-header-left")}>
                  <h2 className={cx("blogs-heading")}>Read our blogs</h2>
                  <p className={cx("blogs-desc")}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                     urna, non nisl tincidunt ut elementum turpis.
                  </p>
               </div>
               <div className={cx("blogs-action")}>
                  <button className={cx("blogs-action-btn")}>
                     READ ALL BLOGS
                  </button>
               </div>
            </div>
            <div className={cx("blogs-list")}>
               <div
                  className={cx("slide-track")}
                  style={{
                     transform: `translate(-${currentSlide * 100}%)`,
                     transition: "transform 0.5s ease",
                  }}
               >
                  {getBlogsAll.map(({ id, day, title, img, desc, more }) => (
                     <div key={id} className={cx("blogs-item")}>
                        <figure className={cx("blogs-item__image")}>
                           <img
                              src={img}
                              alt=""
                              className={cx("blogs-item__img")}
                           />
                        </figure>
                        <div className={cx("blogs-item__content")}>
                           <p className={cx("blogs-item__day")}>{day}</p>
                           <h3 className={cx("blogs-item__heading")}>
                              {title}
                           </h3>
                           <p className={cx("blogs-item__desc")}>{desc}</p>
                           <button className={cx("blogs-item__more")}>
                              {more}
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className={cx("dots")}>
               {Array.from({ length: totalPages }).map((_, index) => (
                  <div
                     key={index}
                     className={cx("dot", {
                        active: currentSlide === index,
                     })}
                     onClick={() => setCurrentSlide(index)}
                  ></div>
               ))}
            </div>
         </div>
      </div>
   );
};
export default Blogs;
