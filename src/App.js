import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import AllUsers from './screens/AllUsers/AllUsers';
import UserPage from './screens/UserPage/UserPage';

function App() {
  return (
    <Router>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <Header />
      <Switch>
        <Route path="/user/:phone">
          <UserPage />
        </Route>
        <Route path="/">
          <AllUsers />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
