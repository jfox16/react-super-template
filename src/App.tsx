import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// -- APPEND PAGE IMPORTS HERE --
import Main from 'pages/Main';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* -- APPEND PAGE ROUTES HERE -- */}
        <Route path='/' component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
