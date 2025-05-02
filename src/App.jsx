import Header from "@layout/header";
import { Outlet } from "react-router";
function App() {
   return (
      <>
         <Header />
         <Outlet />
      </>
   );
}
export default App;
