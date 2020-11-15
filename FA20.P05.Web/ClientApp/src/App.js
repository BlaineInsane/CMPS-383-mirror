import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { HomePage, AdminPortal, ViewPublicData } from "./pages";
import Nav from "./layout/Nav";
import ApiMe from "./ApiCalls/ApiMe";
import ApiGetAllActiveSchools from "./ApiCalls/ApiGetAllActiveSchools";

// import CircleLoader from "react-spinners/RotateLoader";

import { UserContext } from "./Context/UserContext";
import { activeSchoolsContext } from "./Context/ActiveSchoolsContext";

function App() {
  const [user, setUser] = useState(null);
  const [activeSchools, setActiveSchools] = useState([]);

  useEffect(() => {
    checkIfLoggedIn();
    getActiveSchools();
  }, []); // the empty array makes this effect run only once

  const checkIfLoggedIn = async () => {
    try {
      let res = await ApiMe();
      if (res.status === 200) {
        setUser(res.data);
      }
    } catch {
      // user is not logged in. No problem
    }
  };

  const getActiveSchools = async () => {
    try {
      const res = await ApiGetAllActiveSchools();
      if (res.status === 200) {
        setActiveSchools(res.data);
        //setIsLoading(false);
      }
    } catch {
      //setIsLoading(false);
      alert("Could not contact server. Please reload the page.");
    }
  };

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <activeSchoolsContext.Provider
          value={{ activeSchools, setActiveSchools }}
        >
          <Nav />
          <Switch>
            <Route exact path="/AdminPortal">
              <AdminPortal />
            </Route>
            <Route exact path="/ViewPublicData">
              <ViewPublicData />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </activeSchoolsContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}
export default App;
