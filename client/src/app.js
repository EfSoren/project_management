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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  /* const renderPage = () => {
    if (currentPage === "All Projects") {
      return (
        <Cards currentPage={currentPage} handlePageChange={handlePageChange} />
      );
    }
    if (currentPage === "Single Project") {
      return <Current />;
    }
  }; */

  /*  return (
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
  */
  const userId = "6405442e968973138d97f8e5";
  return (
    <Routes>
      <Route path="/home" element={<Nav />}>
        <Route index element={<Cards />} />
        <Route path="single" element={<Current />} />
        <Route path={`${userId}`} element={<Cards />} />
        <Route path=":test" element={<Current />} />
        <Route path="create" element={<Create />} />
      </Route>
    </Routes>
  );
}

export default App;
