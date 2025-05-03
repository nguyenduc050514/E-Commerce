import ScrollToTop from "@components/common/ScrollToTop/ScrollToTop";
import Header from "@layout/header";
import { Outlet } from "react-router";
function App() {
   return (
      <>
         <ScrollToTop />
         <Header />
         <Outlet />
      </>
   );
}
export default App;
