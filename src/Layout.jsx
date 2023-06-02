/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Nav />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
