import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/nav/Nav";

const HomeLayout = () => {
  const location = useLocation();

  const showNav = !(location.pathname === "/cabinate" || location.pathname === "/form" || location.pathname === "/tell" || location.pathname.startsWith("/catalog/"));

  return (
    <>
      {showNav && <Nav />}
      <Outlet />
    </>
  );
};

export default HomeLayout;
