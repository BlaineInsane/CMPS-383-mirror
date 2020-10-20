
import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import{ HomePage, AdminPortal, ViewPublicData} from './pages';
import{Footer, Nav} from './layout';
 function App() {
  return( 

  <Router>
  
    <Nav />
    <Switch>
   <Route exact path ='/AdminPortal'>
   <AdminPortal />
   </Route>
   <Route exact path ='/ViewPublicData'>
   <ViewPublicData />
   </Route>
   <Route exact path ='/'>
   <HomePage />
   </Route>
   </Switch>
   <Footer/>
  </Router>
  );
  }
export default App;