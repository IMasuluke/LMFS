import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './Components/Header.css';
import Home from './pages/Home';
import About from './pages/Aboutus';
import Contact from './pages/ContactUs';
import Plans from './pages/plans';
import { createBrowserHistory } from "history";
import { Router, Suspense, Route, Switch } from 'react-router-dom';
const history = createBrowserHistory();
function App() {
  return (
    <main>
    <Router  history={history}>
      <Switch>
      <Route path="/plans">
            <Plans />
          </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/contact">
            <Contact />
          </Route>
        <Route path="/">
            <Home />
          </Route>
      </Switch>
  </Router>
</main>
  );
}

export default App;
