import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import CreatePost from '../components/CreatePost'
import ShowPost from '../components/ShowPost'
import UserDashboard from '../components/UserDashboard'

const PrivateRouter = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/createpost" exact component={CreatePost} />
    <Route path="/showpost/:name/:slug" exact component={ShowPost} />
    <Route path="/user-dashboard" exact component={UserDashboard} />
  </Switch>
);

export default PrivateRouter
