

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/publicData">View Public Data</Link>
            </li>
            <li>
              <Link to="/admin">Admin Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/publicData">
            <PublicData />
          </Route>
          <Route path="/admin">
            <Admins />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Hiiiiiiiiiiiii This is our homepage!</h2>;
}

function PublicData() {
  return <h2>welcome internet view covid data here</h2>;
}

function Admins() {
  return <h2>admins do stuff with users here</h2>;
}

