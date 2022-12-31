import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Explore from './pages/Explore';
import ISS from './pages/ISS'
import Resources from './pages/Resources';
import Navbar from './components/Navbar';
function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Explore} />
          <Route path='/ISS' exact component={ISS} />
          <Route path='/Resources' exact component={Resources} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
