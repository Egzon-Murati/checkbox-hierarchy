import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ListView from './pages/ListView'
import SelectionsView from './pages/SelectionsView';

import "./stylesheets/scss/list-view.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ListView} />
          <Route path="/summary" component={SelectionsView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
