import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@assets/scss/main.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "@pages/about/index.jsx";
import Shop from "@pages/shop/index.jsx";
import Products from "@pages/products/index.jsx";
import Brand from "@pages/brand/index.jsx";
import Category from "@pages/categories/index.jsx";
import HomePage from "@pages/Home/homePage.jsx";
import { WishlistProvider } from "@context/WishlistContext.jsx";
const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <HomePage />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/brand",
            element: <Brand />,
         },
         {
            path: "/categories/:categoryId",
            element: <Category />,
         },
         {
            path: "/products",
            element: <Products />,
         },
         {
            path: "/shop",
            element: <Shop />,
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <WishlistProvider>
         <RouterProvider router={router} />
      </WishlistProvider>
   </StrictMode>
);
