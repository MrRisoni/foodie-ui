import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import DefaultLayout from "./DefaultLayout";
import Order from "./Order";

import "./index.css";
require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DefaultLayout exact path="/" component={() => <Home />} />
      <DefaultLayout exact path="/order" component={() => <Order />} />
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
