import { useEffect, useState } from "react";
import ProductsComponent from "@components/productsHead";
import styles from "@layout/blogs/blogs.module.scss";
import classNames from "classnames/bind";
import { getAllBlogsList } from "@services/api.service";
const cx = classNames.bind(styles);
const Blogs = () => {
   const [blogs, setBlogs] = useState([]);
   const [currentSlide, setCurrentSlide] = useState(0);
   const itemsPerPage = 3;
   const getAllBlogs = async () => {
      try {
         const response = await getAllBlogsList();
         if (response?.data) {
            setBlogs(response.data);
         }
      } catch (error) {
         console.error(error.message);
      }
   };
   useEffect(() => {
      getAllBlogs();
   }, []);
   const totalPages = Math.ceil(blogs.length / itemsPerPage);
   return (
      <div className={cx("blogs")}>
         <div className={cx("container")}>
            <ProductsComponent
               heading="Learn how to build and grow your online store"
               desc="Get insider tips and step-by-step guidance from eCommerce experts and successful Wix Merchants."
            />
            <div className={cx("blogs-list")}>
               <div className={cx("slider-wrapper")}>
                  <div
                     className={cx("slide-track")}
                     style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: "transform 0.5s ease",
                     }}
                  >
                     {/* Hiển thị 3 bài blog */}
                     {blogs
                        .slice(
                           0,
                           Math.ceil(blogs.length / itemsPerPage) * itemsPerPage
                        )
                        .map((blog) => (
                           <div
                              key={blog.id}
                              className={cx("blogs-item")}
                              title={blog.title}
                           >
                              <figure className={cx("blogs-image")}>
                                 <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className={cx("blogs-img")}
                                 />
                              </figure>
                              <p className={cx("blogs-desc")}>{blog.title}</p>
                              <a
                                 href="#!"
                                 className={cx("blogs-link")}
                                 title="To the Blog"
                              >
                                 Read the blog
                              </a>
                           </div>
                        ))}
                  </div>
               </div>
            </div>
            <div className={cx("dots")}>
               {Array.from({ length: totalPages }).map((_, index) => (
                  <div
                     key={index}
                     className={cx("dot", { active: currentSlide === index })}
                     onClick={() => setCurrentSlide(index)}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Blogs;
