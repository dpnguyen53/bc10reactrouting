import HomePage from "./../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";

const routesHome = [
    {
        exact: true,
        path: "/",
        component: HomePage
    },
    {
        exact: false,
        path: "/about",
        component: AboutPage
    },
    {
        exact: false,
        path: "/list-movie",
        component: ListMoviePage
    }
];

const routesAdmin = [];

export { routesHome, routesAdmin }