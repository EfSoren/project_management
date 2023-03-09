import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Cards from "./components/cards";
import Login from "./components/login";
import Current from "./components/current_card";
import Create from "./components/create_project";
import CreateUser from "./components/create_user";
import "./assets/styles.css"
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import './assets/style.css'
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <ApolloProvider client={client}>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="sign-up" element={<CreateUser />} />
          <Route path="home" element={<Nav />}>
          <Route index element={<Cards />} />
          <Route path="single" element={<Current />} />
          <Route path=":projectId" element={<Current />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
