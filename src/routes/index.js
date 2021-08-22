import React, { lazy } from "react";
import HomeTemplate from "containers/HomeTemplate";
import AdminTemplate from "containers/AdminTemplate";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("containers/HomeTemplate/HomePage")),
  },
  {
    exact: false,
    path: "/about",
    component: lazy(() => import("containers/HomeTemplate/AboutPage")),
  },
  {
    exact: false,
    path: "/list-movie",
    component: lazy(() => import("containers/HomeTemplate/ListMoviePage")),
  },
  {
    exact: false,
    path: "/detail/:id",
    component: lazy(() => import("containers/HomeTemplate/DetailMoviePage")),
  },
  {
    exact: false,
    path: "/hoc",
    component: lazy(() => import("containers/HomeTemplate/HocPage")),
  },
  {
    exact: false,
    path: "/render-props",
    component: lazy(() => import("containers/HomeTemplate/RenderProps")),
  },
  {
    exact: false,
    path: "/hooks",
    component: lazy(() => import("containers/HomeTemplate/HooksPage")),
  },
  {
    exact: false,
    path: "/material",
    component: lazy(() => import("containers/HomeTemplate/MaterialPage")),
  },
  {
    exact: false,
    path: "/styled-cmp",
    component: lazy(() => import("containers/HomeTemplate/StyledCmpPage")),
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("containers/AdminTemplate/Dashboard")),
  },
  {
    exact: false,
    path: "/add-user",
    component: lazy(() => import("containers/AdminTemplate/AddUser")),
  },
];

export function RoutesHome() {
  return routesHome.map((route, index) => (
    <HomeTemplate
      key={index}
      exact={route.exact}
      path={route.path}
      Component={route.component}
    />
  ));
}

export function RoutesAdmin() {
  return routesAdmin.map((route, index) => (
    <AdminTemplate
      key={index}
      exact={route.exact}
      path={route.path}
      Component={route.component}
    />
  ));
}
