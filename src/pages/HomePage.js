import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import DashboardOverview from "./dashboard/DashboardOverview";
import Detection from "../pages/components/Detection";
import History from "./History";
import Setting from "./Setting";
import TrendsTables from "./tables/TrendsTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";

import VerifyAccount from "./examples/VerifyAccount";
import ResetPassword from "./examples/ResetPassword";
import ChangePassword from "./examples/ChangePassword";

import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// components
import Sidebar from "../components/Sidebar";
import Navbarc from "../components/Navbarc";
import Preloader from "../components/Preloader";

import Layout from "../hocs/Layout";
import AboutUs from "./examples/AboutUs";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {" "}
          <Preloader show={loaded ? false : true} /> <Component {...props} />{" "}
        </>
      )}
    />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem("settingsVisible") === "false" ? false : true;
  };

  const [showSettings, setShowSettings] = useState(
    localStorageIsSettingsVisible
  );

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Preloader show={loaded ? false : true} />
          <Sidebar />

          <main className="content">
            <Navbarc />
            <Component {...props} />
          </main>
        </>
      )}
    />
  );
};

export default () => (
  <Layout>
    <Switch>
      <RouteWithLoader
        exact
        path={Routes.Presentation.path}
        component={Presentation}
      />
      <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
      <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
      <RouteWithLoader
        exact
        path={Routes.ForgotPassword.path}
        component={ForgotPassword}
      />
      <RouteWithLoader
        exact
        path={Routes.VerifyAccount.path}
        component={VerifyAccount}
      />
      <RouteWithLoader
        exact
        path={Routes.ResetPassword.path}
        component={ResetPassword}
      />
      <RouteWithLoader
        exact
        path={Routes.ChangePassword.path}
        component={ChangePassword}
      />
      <RouteWithLoader
        exact
        path={Routes.NotFound.path}
        component={NotFoundPage}
      />
      <RouteWithLoader
        exact
        path={Routes.ServerError.path}
        component={ServerError}
      />
      <RouteWithLoader exact path={Routes.AboutUs.path} component={AboutUs} />

      {/* pages */}
      <RouteWithSidebar
        exact
        path={Routes.DashboardOverview.path}
        component={DashboardOverview}
      />
      <RouteWithSidebar exact path={Routes.History.path} component={History} />
      <RouteWithSidebar exact path={Routes.Settings.path} component={Setting} />
      <RouteWithSidebar
        exact
        path={Routes.TrendsTables.path}
        component={TrendsTables}
      />
      <RouteWithSidebar
        exact
        path={Routes.Detection.path}
        component={Detection}
      />

      {/* components */}

      <Redirect to={Routes.NotFound.path} />
    </Switch>
  </Layout>
);
