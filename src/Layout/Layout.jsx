import { Outlet, useLocation } from "react-router-dom";
import Header from "../CommonRoute/Header/Header";
import Footer from "../CommonRoute/Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <Header />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Layout;
