import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import CreatePost from '../components/CreatePost'

const PrivateRouter = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/createpost" exact component={CreatePost} />    
  </Switch>
);

export default PrivateRouter
