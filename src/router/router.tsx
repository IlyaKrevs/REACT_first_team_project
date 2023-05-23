import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ROUTE } from "./routes";
import { MoviesPage } from "../pages/MoviesPage/MoviesPage";
import { Layout } from "../Components";
import { PersonPage, WatchPage } from "../pages";
import HomePage from "../pages/HomePage/HomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.MOVIES} element={<MoviesPage />} />
        <Route path={ROUTE.WATCH} element={<WatchPage />} />
        <Route path={`/${ROUTE.WATCH}/${ROUTE.PERSON}`} element={<PersonPage />} />
        <Route path={`/${ROUTE.WATCH}/${ROUTE.COMMENTS}`} element={<PersonPage />} />
      </Route>
    </>
  )
);
