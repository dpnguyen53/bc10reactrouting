import React from "react";
import Navbar from "./_component/Navbar";
import { Route, Redirect } from "react-router-dom";

function LayoutAdmin(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      //{...props} thay thế cho exact vs path
      {...props}
      render={(propsRoute) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <LayoutAdmin>
              <Component {...propsRoute} />
            </LayoutAdmin>
          );
        }

        //Chuyen huong ve trang auth
        return <Redirect to="/auth" />;
      }}
    />
  );
}
