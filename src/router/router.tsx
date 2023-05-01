import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ROUTE } from "./routes";
import { Layout } from "../components/Layout/Layout";
import PersonPage from "../pages/PersonPage/PersonPage";
import { MoviesPage } from "../pages/PersonPage/MoviesPage/MoviesPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<Layout />}>
       <Route index element={<PersonPage />} />
       <Route path={ROUTE.MOVIES} element={<MoviesPage />} />
      </Route>
    </>
  )
);
