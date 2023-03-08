/* import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Current from "./components/Current";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Create from "./components/CreateProject";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="./components">
            <LandingPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/home">
            <Nav />
            <Switch>
              <Route exact path="/home">
                <Cards />
              </Route>
              <Route path="/home/single">
                <Current />
              </Route>
              <Route path="/home/open">
                <Current />
              </Route>
              <Route path="/home/create">
                <Create />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
 */
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Nav from "./components/nav";
import Cards from "./components/cards";
import Current from "./components/current_card";
import LandingPage from "./components/landing_page";
import Dashboard from "./components/dashboard";
import Create from "./components/create_project";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
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


  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Cards />} />
          <Route path="single" element={<Current />} />
          <Route path={`${userId}`} element={<Cards />} />
          <Route path=":test" element={<Current />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </ApolloProvider>

  );
}

export default App;
