import "./layout.scss";
import NavBar from "../../components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
