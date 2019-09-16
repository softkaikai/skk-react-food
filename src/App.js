import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import Login from './views/login/login';
import Main from './views/main/mian';

function App() {
  return (
      <Router>
          <div className="main">
              <Route path="/" exact component={Login} />
              <Route path="/main" exact component={Main} />
          </div>
          <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
      </Router>

  );
}

export default App;
