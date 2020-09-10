import React, { Component } from "react";
import Footer from "./Footer";
import { BrowserRouter, Route } from "react-router-dom";

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <main>
        <div className="container-fluid">
          <Component {...matchProps} />
        </div>

        <Footer />
      </main>
    )}
  />
);

export default DefaultLayout;
