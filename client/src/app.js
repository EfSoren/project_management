import React, { useState } from "react";
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
