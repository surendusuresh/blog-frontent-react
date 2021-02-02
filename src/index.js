import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import ContextProvider from "./context/context";
import "./styles/styles.scss";

import Router from "./router/Router";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_SERVER,
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <ContextProvider>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </ApolloProvider>
  </ContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
