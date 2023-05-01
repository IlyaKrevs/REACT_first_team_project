import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ROUTE } from "./routes";
import { Layout } from "../components/Layout/Layout";
import { MoviesPage } from "../pages/MoviesPage/MoviesPage";
import { BoevikiPage, CollectionsPage, ForeignPage, NewPages, PersonPage, RussianFilmPage, YearPage } from "pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<Layout />}>
       <Route index element={<PersonPage />} />
       <Route path={ROUTE.MOVIES} element={<MoviesPage />} />
       <Route path={`/${ROUTE.MOVIES}/${ROUTE.BOEVIKI}`} element={<BoevikiPage />} />
       <Route path={`/${ROUTE.MOVIES}/${ROUTE.FOREIGN}`} element={<ForeignPage />} />
       <Route path={`/${ROUTE.MOVIES}/${ROUTE.RU}`} element={<RussianFilmPage />} />
       <Route path={`/${ROUTE.MOVIES}/${ROUTE.NEW}`} element={<NewPages />} />
       <Route path={`/${ROUTE.MOVIES}/${ROUTE.YEAR2016}`} element={<YearPage />} />
       <Route path={`/${ROUTE.MOVIES}/${ROUTE.YEAR2015}`} element={<YearPage />} />
       <Route path={`/${ROUTE.MOVIES}/${ROUTE.LOVE}`} element={<CollectionsPage />} />
       <Route path={`/${ROUTE.MOVIES}/${ROUTE.WAR}`} element={<CollectionsPage/>} />
       <Route path={`/${ROUTE.MOVIES}/${ROUTE.DRAMA}`} element={<CollectionsPage/>} />
      </Route>
    </>
  )
);
