import React, { Fragment, useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Context } from "../context/context";
import PublicRouter from '../router/PublicRouter'
import PrivateRouter from '../router/PrivateRouter'

const Router = () => {

  const { auth } = useContext(Context);

  return (
    <Fragment>
      <BrowserRouter>
        <Header />
            {auth.token ? <PrivateRouter /> : <PublicRouter />}            
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default Router;
