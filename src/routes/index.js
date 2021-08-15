import HomePage from "./../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import DetailMoviePage from "./../containers/HomeTemplate/DetailMoviePage";
import AddUser from "../containers/AdminTemplate/AddUser";
import Dashboard from "../containers/AdminTemplate/Dashboard";
import HocPage from "../containers/HomeTemplate/HocPage";
import RenderProps from "../containers/HomeTemplate/RenderProps";
import HooksPage from "../containers/HomeTemplate/HooksPage";
import MaterialPage from "../containers/HomeTemplate/MaterialPage";
import StyledCmpPage from "../containers/HomeTemplate/StyledCmpPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailMoviePage,
  },
  {
    exact: false,
    path: "/hoc",
    component: HocPage,
  },
  {
    exact: false,
    path: "/render-props",
    component: RenderProps,
  },
  {
    exact: false,
    path: "/hooks",
    component: HooksPage,
  },
  {
    exact: false,
    path: "/material",
    component: MaterialPage,
  },
  {
    exact: false,
    path: "/styled-cmp",
    component: StyledCmpPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUser,
  },
];

export { routesHome, routesAdmin };
