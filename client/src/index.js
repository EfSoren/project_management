import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});
ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById("root")
);
