import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './views/login/login';

function App() {
  return (
      <Router>
          <div className="main">
              <Route path="/" exact component={Login} />
          </div>
      </Router>

  );
}

export default App;
