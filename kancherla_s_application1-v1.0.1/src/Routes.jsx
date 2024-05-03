import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import NotLoggedInDesktop from "pages/NotLoggedInDesktop";
import LoggedInUserScrolledLocationEditEnabled from "pages/LoggedInUserScrolledLocationEditEnabled";
import LoggedInUserScrolledFollowGroupsClicked from "pages/LoggedInUserScrolledFollowGroupsClicked";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "notloggedindesktop",
      element: <NotLoggedInDesktop />,
    },
    {
      path: "loggedinuserscrolledlocationeditenabled",
      element: <LoggedInUserScrolledLocationEditEnabled />,
    },
    {
      path: "loggedinuserscrolledfollowgroupsclicked",
      element: <LoggedInUserScrolledFollowGroupsClicked />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
