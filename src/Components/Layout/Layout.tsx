import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageSection from "../PageSection/PageSection";

export const Layout = () => {
  return (
    <>
      <Header />

      <Footer />
    </>
  );
};
