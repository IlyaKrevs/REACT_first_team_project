import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageSection from "../PageSection/PageSection";
import Carousel from "../Carousel/Carousel";
import FilmCard from "../FilmCard/FilmCard";

export const Layout = () => {
  return (
    <>
      <Header />

      <PageSection>

        <Carousel />

      </PageSection>
      <Footer />
    </>
  );
};
