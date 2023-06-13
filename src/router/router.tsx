import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ROUTE } from "./routes";
import { Layout } from "../Components";
import { AuthPage, PersonPage, WatchPage } from "../pages";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import AdminPanelPage from "../pages/AdminPanelPage/AdminPanelPage";
import { IUser } from "../store/types/user";

const routes = (user: IUser) => [
  ...createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={`${ROUTE.HOME}${ROUTE.WATCH}/:id`} element={<WatchPage />} />
        <Route path={ROUTE.PERSON} element={<PersonPage />} />
        <Route path={ROUTE.MOVIES + '/*'} element={<MoviesPage />} />
        <Route path={ROUTE.PERSON} element={<PersonPage />} />
        <Route path={ROUTE.SIGN_IN} element={<AuthPage />} />
        <Route
          path={`${ROUTE.WATCH}/${ROUTE.COMMENTS}`}
          element={<PersonPage />}
        />
        <Route path={`${ROUTE.ADMINPANEL}`} element={<AdminPanelPage />} />

      </Route>
    </>
  )
];

export const router = (user: IUser) => createBrowserRouter(routes(user));
