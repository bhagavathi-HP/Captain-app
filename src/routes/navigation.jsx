import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom/dist";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <Outlet />
        <div className="link-container"></div>
      </div>
    </Fragment>
  );
};

export default Navigation;
