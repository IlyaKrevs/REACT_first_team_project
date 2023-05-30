import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ROUTE } from "./routes";
import { Layout } from "../Components";
import { PersonPage, WatchPage } from "../pages";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.MOVIES} element={<MoviesPage />} />
        <Route path={`/${ROUTE.WATCH}/:id`} element={<WatchPage nameRU={""} year={0} duration={0} ageRating={""} idCountry={0} rating={0} text={""} />} />
        <Route
          path={`/${ROUTE.WATCH}/:id/${ROUTE.PERSON}`}
          element={<PersonPage />}
        />
        <Route path={`/${ROUTE.WATCH}/${ROUTE.COMMENTS}`} element={<PersonPage />} />
      </Route>
    </>
  )
);
