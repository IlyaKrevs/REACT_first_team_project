import { Outlet } from "react-router-dom";
import Header from "../aKrevs/Header/Header";
import Footer from "../aKrevs/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
