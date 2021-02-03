import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import ShowPost from '../components/ShowPost';

const PublicRouter = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/signin" exact component={Signin} />
    <Route path="/showpost/:name/:slug" exact component={ShowPost} />
  </Switch>
);

export default PublicRouter
