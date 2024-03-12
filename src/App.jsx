import "./layout.scss";
import Navbar from "./components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import HomePage from "./routes/homePage/HomePage";
function App() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <HomePage />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
