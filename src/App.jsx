import ScrollToTop from "@components/common/ScrollToTop/ScrollToTop";
import Header from "@layout/header";
import { Outlet } from "react-router";
import { WishlistProvider } from "./context/WishlistContext";
function App() {
   return (
      <>
         <WishlistProvider>
            <ScrollToTop />
            <Header />
            <Outlet />
         </WishlistProvider>
      </>
   );
}
export default App;
