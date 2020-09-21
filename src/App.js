import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Showroom from "./pages/Showroom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Navigation />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/showroom" component={Showroom} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
