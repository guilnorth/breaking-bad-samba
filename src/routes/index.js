import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";

import Home from "../pages/home";
import Search from "../pages/search";
import Header from '../components/header'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
