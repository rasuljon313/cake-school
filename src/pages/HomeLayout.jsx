import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

const HomeLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default HomeLayout;