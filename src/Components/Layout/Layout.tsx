import { Outlet } from "react-router-dom";
import Header from "../aKrevs/Header/Header";
import Carousel from "../aKrevs/Carousel/Carousel";
import Footer from "../aKrevs/Footer/Footer";
import PageSection from "../aKrevs/PageSection/PageSection";


export const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
