
import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";

import{ HomePage, AdminPortal, ViewPublicData} from './pages';
import{Nav } from './layout';
 function App() {
  return( 

  <Router>
  
    <Nav />
    <Switch>
      <Route path ="./HomePage">
   <HomePage />
   </Route>
   <Route path ="./AdminPortal">
   <AdminPortal />
   </Route>
   <Route path ="./ViewPublicData">
   <ViewPublicData />
   </Route>
   </Switch>
  </Router>
  );
  }
export default App;